import styled from '@emotion/styled';
import { Typography, TextField } from '@material-ui/core';

const InputFormContainer = styled.div(() => ({
  position: 'relative',
  margin: '45px 0',

  input: {
    background: 'none',
    backgroundColor: 'white',
    color: 'gray',
    fontSize: '1.5em',
    padding: '1em 1em 0.2em 0.5em',
    display: 'block',
    width: '100%',
    border: 'none',
    borderRadius: '0',
    borderBottom: '1px solid gray',
    margin: '2em 0',

    '&: focus': {
      outline: 'none',
    },
  },

  // "input[type = 'password']": {
  //   letterSpacing: '0.3em',
  // },

  '.input-label': {
    color: 'gray',
    fontSize: '1em',
    fontWeight: 'normal',
    position: 'absolute',
    pointerEvents: 'none',
    left: '0.3em',
    top: '1.5em',
  },
}));

export default InputFormContainer;
