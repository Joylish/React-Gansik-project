import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const bounce = keyframes`
  from, 10%, 33%, 50%, to {
    transform: translate3d(0,0,0);
  }

  20%, 27% {
    transform: translate3d(0, -30px, 0);
  }

  40% {
    transform: translate3d(0, -15px, 0);
  }

  50% {
    transform: translate3d(0,-4px,0);
  }
`;

const PreviewProductContainer = styled.div(() => ({
  marginTop: '5em',
  h2: {
    animation: `${bounce} 1s ease infinite`,
    textAlign: 'center',
    marginBottom: '2em',
  },
}));
export default PreviewProductContainer;
