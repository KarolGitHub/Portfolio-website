import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import AuthorIcon from '../../assets/author.svg';
import DateIcon from '../../assets/date.svg';
import TagsIcon from '../../assets/tags.svg';
import TimeIcon from '../../assets/time.svg';
import arrowRightIcon from '../../assets/arrow-right.svg';
import {
  Wrapper,
  ImageWrapper,
  Overlay,
  MetaData,
  InfoWrapper,
  DetailsWrapper,
  PostLinkWrapper,
} from './BlogCard.styles';

type Props = {
  hit: BlogPost;
};

const BlogCard: React.FC<Props> = ({
  hit: {
    objectID: id,
    slug,
    title,
    date,
    _tags: tags,
    author,
    readingTime: { text: readingTime },
    excerpt,
    image: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <Wrapper key={id}>
    <ImageWrapper>
      <Img fluid={fluid} alt="image" />
      <Overlay>
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
      </Overlay>
    </ImageWrapper>
    <MetaData>
      <Link to={slug}>
        <h2>{title}</h2>
      </Link>
      <p>{excerpt}</p>
      <InfoWrapper>
        <div>
          <img src={TagsIcon} alt="tags" />
          <ul>
            {tags.map((tag, i) => (
              <li key={'tag' + i}>
                <Link to={`/blog/t/${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
        <PostLinkWrapper>
          <Link to={slug}>
            Read More
            <img src={arrowRightIcon} alt="Read more" />
          </Link>
        </PostLinkWrapper>
      </InfoWrapper>
    </MetaData>
  </Wrapper>
);

export default BlogCard;
