import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  margin: 229px auto 0 auto;
  padding: 40px 17px 23px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 480px;
  height: 330px;
  border: 5px solid var(--blue-water);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  @media (max-width: 744px) {
    margin: 284px auto;
  }

  @media (max-width: 550px) {
    width: 290px;
    height: 330px;
    margin: 14px auto;
    padding: 10px 40px 23px 30px;
  }
`;
export default Form;
