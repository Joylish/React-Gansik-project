import styled from '@emotion/styled';

const LoginFormContainer = styled.div(() => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 60px',
  '& .login-buttons': {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default LoginFormContainer;
