import Form from './Form';
import Title from './Title';
import Wrapper from './Wrapper';
import Input from './Input';
import ButtonSubmit from './ButtonSubmit';
import useInput from '../../hooks/useInput';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux';

const FormAuth = () => {
  const { error } = useSelector((state) => state.auth);
  const { fetchAuth } = useActions();
  const login = useInput('');
  const password = useInput('');

  const auth = () => {
    fetchAuth({ email: login.value, password: password.value });
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      {error && <span>{error}</span>}
      <Title>Autorization</Title>

      <Wrapper>
        <span>login</span>
        <Input type="text" {...login} />
      </Wrapper>
      <Wrapper>
        <span>password</span>
        <Input type="text" {...password} />
      </Wrapper>
      <ButtonSubmit onClick={auth}>Submit</ButtonSubmit>
    </Form>
  );
};

export default FormAuth;
