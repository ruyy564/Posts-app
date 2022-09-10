import styled from 'styled-components';

const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 947px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1045px) {
    width: 672px;
  }

  @media (max-width: 715px) {
    flex-direction: column;
    width: 292px;
  }
`;

export default ContainerStyled;
