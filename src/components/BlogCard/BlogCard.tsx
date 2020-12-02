import React from 'react';
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
    readingTime: { text },
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
            <img src={AuthorIcon} alt="time" />
            <li>{author}</li>
          </ul>
          <ul>
            <img src={DateIcon} alt="time" />
            <li>{date}</li>
          </ul>
          <ul>
            <img src={TimeIcon} alt="time" />
            <li>{text}</li>
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
          <img src={TagsIcon} alt="time" />
          <ul>
            {tags.map((tag, i) => (
              <Link key={'tag' + i} to={`/blog/t/${tag}`}>
                #{tag}
              </Link>
            ))}
          </ul>
        </div>
        <Link to={slug}>Read More</Link>
      </InfoWrapper>
    </MetaData>
  </Wrapper>
);

export default BlogCard;
