import React, { FunctionComponent } from 'react';
import TagCard from './TagCard/TagCard';
import { Wrapper,TagCardsWrapper } from './TagCards.styles';

type Props = {
  tags: Tag[];
};

const TagCards: FunctionComponent<Props> = ({ tags }) => {
  return (
    <Wrapper>
      <h1>Tags</h1>
      <TagCardsWrapper>
        {tags.map((tag, index) => (
          <TagCard key={tag.value + index} tag={tag} />
        ))}
      </TagCardsWrapper>
    </Wrapper>
  );
};

export default TagCards;
