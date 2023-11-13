import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/Main/MainPage';
import { Page404 } from './pages/Main/Page404/Page404';

export function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
