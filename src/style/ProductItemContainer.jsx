import styled from '@emotion/styled';

const Container = styled.div(() => ({
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  height: '350px',
  alignItems: 'center',
  margin: '0.3em',

  '.itemImage': {
    overflow: 'hidden',
    width: '100%',
    height: '95%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '1em',
    borderRadius: '1em',
  },

  '.itemInfo': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '5%',

    '.name': {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },

    '.sellerName': {
      marginBottom: '15px',
    },
  },

  '&:hover': {
    cursor: 'pointer',
    '& .itemImage': {
      filter: 'brightness(80%)',
    },
  },
}));

export default Container;
