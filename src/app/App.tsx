import { Route, Routes } from 'react-router-dom';
import { Main } from '../pages/main/Main';
import { Form01 } from '../pages/forms/Form01';
import { Form02 } from '../pages/forms/Form02';
import { Page404 } from '../pages/page404/Page404';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="uncontrolled-form" element={<Form01 />} />
        <Route path="react-hook-form" element={<Form02 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
