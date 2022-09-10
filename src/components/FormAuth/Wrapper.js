import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 24px;
  line-height: 29px;
  font-weight: 800;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default Wrapper;
