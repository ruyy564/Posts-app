import Wrapper from '../Input/Wrapper';
import InputStyled from '../Input/InputStyled';
import Label from '../Input/Label';

const Input = ({ type, name, input }) => {
  return (
    <Wrapper>
      <Label>{name}</Label>
      <InputStyled type={type} {...input} />
    </Wrapper>
  );
};

export default Input;
