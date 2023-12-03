import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../../components/Form/Form ';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { FormFieldsInterface } from '../../types/types';
import { addData } from '../../store/dataListSlice';
import './FormPages.css';

export function Form01() {
  const dataList = useAppSelector((store) => store.dataList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onSubmit(data: FormFieldsInterface) {
    const updatedDataList = Array(data).concat(dataList.list);

    dispatch(addData(updatedDataList));
    navigate('/');
  }

  return (
    <div className="form-container">
      <h2>Form 01</h2>
      <Link to={'/'}>
        <button className="btn form-page-btn">To main page</button>
      </Link>
      <Form onSubmit={onSubmit} />
    </div>
  );
}
