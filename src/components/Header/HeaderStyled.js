import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: var(--cream);
  height: 118px;
  padding: 27px 29px 28px 41px;

  @media (max-width: 744px) {
    padding: 27px 37px 28px 37px;
  }
  @media (max-width: 470px) {
    padding: 28px 15px 28px 15px;
  }
`;

export default HeaderStyled;
