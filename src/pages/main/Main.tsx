import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { FormDataCard } from '../../components/FormDataCard/FormDataCard';
import './Main.css';

export function Main() {
  const dataList = useAppSelector((store) => store.dataList);

  return (
    <div className="main-page-container">
      <h2>Main Page</h2>
      <Link to={'form01'}>
        <button className="btn main-page-btn">Uncontrolled Form</button>
      </Link>
      <Link to={'form02'}>
        <button className="btn main-page-btn">React Hook Form</button>
      </Link>

      <div className="data-container">
        {dataList.list.map((el, i) => (
          <FormDataCard key={i} name={el.name} age={el.age} />
        ))}
      </div>
    </div>
  );
}
