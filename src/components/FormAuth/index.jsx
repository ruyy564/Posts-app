import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import useActions from '../../hooks/useActions';
import Form from './Form';
import Title from './Title';
import Input from '../Input/';
import ButtonSubmit from './ButtonSubmit';
import Error from '../Error/';

const FormAuth = () => {
  const { fetchAuth } = useActions();
  const { error } = useSelector((state) => state.auth);
  const login = useInput('');
  const password = useInput('');

  const auth = () => {
    fetchAuth({ email: login.value, password: password.value });
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Title>Autorization</Title>
      {error && <Error>{error}</Error>}
      <Input name="login" type="text" input={{ ...login }} />
      <Input name="password" type="password" input={{ ...password }} />
      <ButtonSubmit onClick={auth}>Submit</ButtonSubmit>
    </Form>
  );
};

export default FormAuth;
