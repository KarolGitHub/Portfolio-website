import styled from '@emotion/styled';
import Img from 'gatsby-image';

export const Image = styled(Img)`
  border-radius: 10px;
  max-width: calc(var(--max-width) - 300px);
  margin: 0 auto;
  max-height: 400px;
`;
