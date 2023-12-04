import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/main/Main';
import { Form01 } from '../pages/form/Form01';
import { Form02 } from '../pages/form/Form02';
import { Page404 } from '../pages/page404/Page404';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="form01" element={<Form01 />} />
        <Route path="form02" element={<Form02 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
