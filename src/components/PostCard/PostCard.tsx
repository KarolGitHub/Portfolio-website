import React from 'react';
import { Link } from 'gatsby';

import Image from '../Image/Image';
import { Wrapper, Content, TagsList, DetailsWrapper } from './PostCard.styles';
import AuthorIcon from '../../assets/author.svg';
import DateIcon from '../../assets/date.svg';
import TimeIcon from '../../assets/time.svg';

type Props = {
  postData: {
    image: any;
    author: string;
    date: string;
    title: string;
    tags: string[];
    readingTime: string;
  };
  children: React.ReactNode;
};

const PostCard: React.FC<Props> = ({
  postData: { image, author, date, title, tags, readingTime },
  children,
}) => {
  return (
    <Wrapper>
      <Image fluid={image.childImageSharp.fluid} />
      <Content>
        <TagsList>
          {tags.map((tag, i) => (
            <li key={'tag' + i}>
              <Link to={`/blog/t/${tag}`}>#{tag}</Link>
            </li>
          ))}
        </TagsList>
        <DetailsWrapper>
          <ul>
            <img src={AuthorIcon} alt="author" />
            <li>{author}</li>
          </ul>
          <ul>
            <img src={DateIcon} alt="date" />
            <li>{date}</li>
          </ul>
          <ul>
            <img src={TimeIcon} alt="time" />
            <li>{readingTime}</li>
          </ul>
        </DetailsWrapper>
        <h2>{title}</h2>
        {children}
      </Content>
    </Wrapper>
  );
};

export default PostCard;
