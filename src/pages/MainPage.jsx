import Header from '../components/Header/';
import Post from '../components/Post/';
import Container from '../components/Container';
import useActions from '../hooks/useActions';
import Loader from '../components/Loader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const { fetchPost } = useActions();
  const { error, loading, posts } = useSelector((state) => state.post);

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {error && <span>{error}</span>}
        {loading && <Loader />}
        {posts.map((post) => {
          return <Post key={post.title} {...post} />;
        })}
      </Container>
    </>
  );
};

export default MainPage;
