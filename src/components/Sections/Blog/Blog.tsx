import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { Wrapper, Tags, Banner, Content } from './Blog.styles';

type Props = {
  taglist?: Tag[];
  children: any;
};

const Blog: FunctionComponent<Props> = ({ taglist, children }) => {
  return (
    <Wrapper>
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
      <Content
        {...(taglist ? { width: ['80%', '60%'] } : { width: ['100%', '80%'] })}>
        {children}
      </Content>
      <Banner>
        <h3>Place Add Here</h3>
      </Banner>
    </Wrapper>
  );
};

export default Blog;
