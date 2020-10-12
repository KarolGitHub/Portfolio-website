import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import AuthorIcon from '../../assets/author.svg';
import DateIcon from '../../assets/date.svg';
import TagsIcon from '../../assets/tags.svg';
import TimeIcon from '../../assets/time.svg';
import {
  Wrapper,
  ImageWrapper,
  Overlay,
  MetaData,
  InfoWrapper,
  DetailsWrapper,
} from './BlogCard.styles';

type Props = {
  slug: string;
  title: string;
  date: string;
  tags: [string];
  author: string;
  readingTime: string;
  excerpt: string;
  image: any;
};

const BlogCard: FunctionComponent<Props> = ({
  slug,
  title,
  date,
  tags,
  author,
  readingTime,
  excerpt,
  image,
}) => (
  <Wrapper>
    <ImageWrapper>
      <Img fluid={image} alt="image" />
      <Overlay>
        <DetailsWrapper>
          <ul>
            <img src={AuthorIcon} alt="time" />
            <li>{author}</li>
          </ul>
          <ul>
            <img src={DateIcon} alt="time" />
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
        <ul>
          <img src={TagsIcon} alt="time" />
          {tags.map((tag, i) => (
            <Link key={'tag' + i} to={`/blog/t/${tag}`}>
              #{tag}
            </Link>
          ))}
        </ul>
        <Link to={slug}>Read More</Link>
      </InfoWrapper>
    </MetaData>
  </Wrapper>
);

export default BlogCard;
