import React from 'react';
import { Link } from 'gatsby';
import BannerImg from '../../../assets/banner.png';
import { Wrapper, Tags, Banner, Content } from './Blog.styles';

type Props = {
  taglist?: Tag[];
  children: React.ReactNode;
};

const Blog: React.FC<Props> = ({ taglist, children }) => {
  return (
    <Wrapper
      {...(taglist
        ? { columnsRatio: ['1fr 3fr', '1fr 3fr 1fr'] }
        : { columnsRatio: ['auto', '2.5fr 1fr'] })}>
      {taglist && (
        <Tags>
          <Link to="/blog/tags" activeClassName="active">
            <h3>Tags</h3>
          </Link>
          <nav>
            {taglist.map(({ value, path }, index) => (
              <Link key={value + index} to={path} activeClassName="active">
                {value}
              </Link>
            ))}
          </nav>
        </Tags>
      )}
      <Content>{children}</Content>
      <Banner>
        <img src={BannerImg} alt="banner" />
      </Banner>
    </Wrapper>
  );
};

export default Blog;
