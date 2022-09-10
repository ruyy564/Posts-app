import PostStyled from './PostStyled';
import AuthorInfoWrapper from './AuthorInfoWrapper';
import PostImage from './PostImage';
import TitleWrapper from './TitleWrapper';
import Title from './Title';
import Text from './Text';
import Description from './Description';
import styled from 'styled-components';
const T = styled.p``;
const Post = ({ author, title, company, body, img }) => {
  return (
    <PostStyled>
      <AuthorInfoWrapper>
        <PostImage src={img} />
        <TitleWrapper>
          <Title>Autor: {author}</Title>
          <Title>Company: {company}</Title>
        </TitleWrapper>
      </AuthorInfoWrapper>
      <Text>
        <T>Title:{title}</T>
        <Description>{body}</Description>
      </Text>
    </PostStyled>
  );
};

export default Post;
