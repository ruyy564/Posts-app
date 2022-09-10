import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="*" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
