import styled from 'styled-components';

const AuthorInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
  @media (max-width: 1045px) {
    height: 252px;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0;
  }

  @media (max-width: 715px) {
    height: 88px;
  }
`;

export default AuthorInfoWrapper;
