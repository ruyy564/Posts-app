import styled from 'styled-components';

const TitleWrapper = styled.div`
  padding: 3px 13px 0 0;

  @media (max-width: 1045px) {
    height: 86px;
    padding: 0px 0px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default TitleWrapper;
