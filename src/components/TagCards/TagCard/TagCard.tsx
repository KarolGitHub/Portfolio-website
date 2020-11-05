import { Link } from 'gatsby';
import React, { FunctionComponent, useMemo } from 'react';
import { Wrapper } from './TagCard.styles';

type Props = {
  tag: BlogTag;
  tagInfo: { path: string; count: number };
};

const TagCard: FunctionComponent<Props> = ({
  tag: { name, bgColor },
  tagInfo: { path, count },
}) => {
  return useMemo(
    () => (
      <Wrapper {...{ bgColor }}>
        <div>
          <Link to={path}>
              <h3>{'#' + name}</h3>
          </Link>
        </div>
        {count > 0 && (
          <div>{`${count} post${count === 1 ? '' : 's'} published`}</div>
        )}
      </Wrapper>
    ),
    [name]
  );
};

export default TagCard;
