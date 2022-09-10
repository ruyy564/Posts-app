import styled from 'styled-components';

const PostImage = styled.img`
  width: 150px;
  height: 150px;
  background-color: var(--cream);

  @media (max-width: 715px) {
    display: none;
  }
`;

export default PostImage;
