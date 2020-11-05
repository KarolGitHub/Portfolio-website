import React, { FunctionComponent, useEffect, useState } from 'react';
import TagCard from './TagCard/TagCard';
import { Wrapper, TagCardsWrapper } from './TagCards.styles';
import { defer } from 'rxjs';
import _ from 'lodash';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator';

const windowGlobal = typeof window !== 'undefined' && window;
const headers = { 'Content-Type': 'application/json' };
const URL = 'https://dev.to/api/tags';

type Props = {
  tagsInfo: Tag[];
};

const TagCards: FunctionComponent<Props> = ({ tagsInfo }) => {
  const [TagsData, setTagsData] = useState<BlogTag[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let resultsPerPage: number;
  if (windowGlobal) {
    const width = window.innerWidth;
    const ratio = window.devicePixelRatio;
    resultsPerPage =
      width * ratio < 1300 ? (width * ratio < 800 ? 10 : 20) : 30;
  } else {
    resultsPerPage = 10;
  }

  const getTagURL = (name: string) => {
    const tagExists = tagsInfo.find((tag) => tag.value === name);
    if (tagExists) {
      return { path: tagExists.path, count: tagExists.count };
    } else {
      return { path: '/blog/t/search/', count: 0 };
    }
  };

  const searchTagsRequest = (page: number) => {
    setLoading(true);
    return defer(() =>
      fetch(`${URL}?per_page=${resultsPerPage}&page=${page}`, {
        headers: headers,
      }).then((response) => response.json())
    ).subscribe({
      next: (tags: TagMetaData[]) => {
        const nextTags: BlogTag[] = tags.map(({ name, bg_color_hex }) => ({
          name: name,
          bgColor: bg_color_hex,
        }));
        setTagsData([...TagsData, ...nextTags]);
      },
      error: (error) => {
        setLoading(false);
        setError(error);
      },
      complete: () => {
        setLoading(false);
        if (currentPage < (6704 * 10) / resultsPerPage) {
          setCurrentPage(currentPage + 1);
        } else {
          setCurrentPage(0);
        }
      },
    });
  };

  const debouncedScrollEvent = _.debounce(() => {
    if (error || isLoading || !currentPage) {
      return;
    }
    const height = window.innerHeight;
    const scroll = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;
    if (offsetHeight - height - scroll < 70) {
      searchTagsRequest(currentPage);
    }
  }, 300);

  if (windowGlobal) {
    window.onscroll = debouncedScrollEvent;
  }

  useEffect(() => {
    const subscription = searchTagsRequest(currentPage);
    return () => {
      if (windowGlobal) {
        window.onscroll = null;
      }
      subscription.unsubscribe();
      debouncedScrollEvent.cancel();
    };
  }, []);

  return (
    <Wrapper>
      <h1>Tags</h1>
      <TagCardsWrapper>
        {TagsData.map((tag, index) => (
          <TagCard
            key={tag.name + index}
            tag={tag}
            tagInfo={getTagURL(tag.name)}
          />
        ))}
      </TagCardsWrapper>
      {error && (
        <div style={{ color: '#900', fontWeight: 'bold' }}>{error}</div>
      )}
      {isLoading && <LoadingIndicator />}
    </Wrapper>
  );
};

export default TagCards;
