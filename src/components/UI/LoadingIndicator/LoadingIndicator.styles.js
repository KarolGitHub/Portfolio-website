import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const animation = keyframes`
  from, 0%, 40%, 100%, to {
    -webkit-transform: scale(0); 
    transform: scale(0); 
    }
  20% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0); 
    }
`;

export const Item1 = styled.div``;
export const Item2 = styled.div``;
export const Item3 = styled.div``;

export const Wrapper = styled.div`
  margin: 20px auto 0;
  width: 70px;
  text-align: center;
  display: grid;
  gap: 5px;
  grid-auto-flow: column;
  div {
    animation: ${animation} 1s infinite ease-in-out both;
    -webkit-animation: ${animation} 1s infinite ease-in-out both;
    background-color: ${(props) => props.theme.colors.loading};
    width: 18px;
    height: 18px;
    border-radius: 30%;
  }
  ${Item2} {
    -webkit-animation-delay: 0.08s;
    animation-delay: 0.08s;
  }
  ${Item3} {
    -webkit-animation-delay: 0.16s;
    animation-delay: 0.16s;
  }
`;
