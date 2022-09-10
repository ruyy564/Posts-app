import { Outlet } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return isAuth ? <Outlet /> : <AuthPage />;
};

export default ProtectedRoute;
