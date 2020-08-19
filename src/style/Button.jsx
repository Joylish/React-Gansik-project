import styled from '@emotion/styled';

const Button = styled.button((props) => ({
  props,
  minWidth: '165px',
  width: 'auto',
  height: '50px',
  letterSpacing: '0.5px',
  lineHeight: '3em',
  padding: '0 35px 0 35px',
  fontSize: '15px',
  backgroundColor: props.isOAuth ? '#4285f4' : 'black',
  color: 'white',
  fontWeight: 'border',
  border: 'none',
  cursor: 'pointer',

  '&: hover': {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
  },
}));

export default Button;
