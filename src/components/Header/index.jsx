import HeaderStyled from './HeaderStyled';
import HeaderWrapper from './HeaderWrapper';
import LogoWrapper from './LogoWrapper';
import InfoWrapper from './InfoWrapper';
import UsernameTitle from './UsernameTitle';
import { ImageLogo, ImageLogout } from './Image';
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.svg';
import useActions from '../../hooks/useActions';
import { useSelector } from 'react-redux';

const Header = () => {
  const { fetchLogout } = useActions();
  const { isAuth, username } = useSelector((state) => state.auth);

  return (
    <HeaderStyled>
      <HeaderWrapper>
        <LogoWrapper>
          <ImageLogo src={logo} alt="logo" />
        </LogoWrapper>
        {isAuth && (
          <InfoWrapper>
            <UsernameTitle>{username}</UsernameTitle>
            <ImageLogout src={logout} alt="logout" onClick={fetchLogout} />
          </InfoWrapper>
        )}
      </HeaderWrapper>
    </HeaderStyled>
  );
};

export default Header;
