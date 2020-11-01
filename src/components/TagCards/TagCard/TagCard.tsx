import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Wrapper } from './TagCard.styles';

type Props = {
  tag: Tag;
};

const TagCard: FunctionComponent<Props> = ({ tag: { count, value, path } }) => {
  return (
    <Wrapper>
      <div>
        <Link to={path}>
          <h3>{'#' + value}</h3>
        </Link>
      </div>
      <div>{`${count} post${count === 1 ? '' : 's'} published`}</div>
    </Wrapper>
  );
};

export default TagCard;
