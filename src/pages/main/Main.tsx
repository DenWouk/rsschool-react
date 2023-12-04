import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { FormDataCard } from '../../components/FormDataCard/FormDataCard';
import './Main.css';

export function Main() {
  const dataList = useAppSelector((store) => store.dataList);

  return (
    <div className="main-page-container">
      <h3 className="page-title">Main Page</h3>

      <div className="main-page-links">
        <Link to={'form01'}>
          <button className="btn main-page-btn">Uncontrolled Form</button>
        </Link>
        <Link to={'form02'}>
          <button className="btn main-page-btn">React Hook Form</button>
        </Link>
      </div>

      <div className="data-container">
        {dataList.list.length ? (
          dataList.list.map((el, i) => <FormDataCard key={i} {...el} />)
        ) : (
          <h4 className="nodata-note">
            No data yet. Enter your data on the forms pages and they will be
            displayed here.
          </h4>
        )}
      </div>
    </div>
  );
}
