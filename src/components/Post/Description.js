import styled from 'styled-components';

const Description = styled.p`
  @media (max-width: 1045px) {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 96px;
    margin-top: 6px;
  }

  @media (max-width: 715px) {
    display: none;
  }
`;

export default Description;
