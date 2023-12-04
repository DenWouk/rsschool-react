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
      <h3 className="page-title">Uncontrolled form</h3>

      <Link to={'/'}>
        <button className="btn form-page-btn">To main page</button>
      </Link>

      <Form onSubmit={onSubmit} />
    </div>
  );
}
