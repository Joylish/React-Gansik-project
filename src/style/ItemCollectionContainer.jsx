import styled from '@emotion/styled';

const ItemCollectionContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '5em',

  '.category': {
    textAlign: 'center',
    marginBottom: '1em',
  },

  '.collection': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default ItemCollectionContainer;
