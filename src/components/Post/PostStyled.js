import styled from 'styled-components';

const PostStyled = styled.div`
  padding: 20px 16px;
  width: 467px;
  height: 388px;
  border: 5px solid var(--blue-water);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 20px;

  @media (max-width: 1045px) {
    margin-top: 25px;
    width: 325px;
    height: 470px;
    padding: 20px 20px;
  }

  @media (max-width: 715px) {
    margin-top: 10px;
    width: 292px;
    height: 200px;
    padding: 12px 10px;
  }
`;

export default PostStyled;
