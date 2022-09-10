import styled from 'styled-components';

const Input = styled.input`
  width: 295px;
  height: 45px;
  font-size: 24px;
  border: 4px solid var(--blue-water);
  border-radius: 10px;
  background-color: #d9d9d9;

  @media (max-width: 550px) {
    margin-top: 8px;
    width: 212px;
    height: 39px;
  }
`;

export default Input;
