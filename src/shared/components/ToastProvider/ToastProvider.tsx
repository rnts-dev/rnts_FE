import style from './ToastProvider.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = () => {
  return <ToastContainer className={style.toast} autoClose={1500} draggable theme="dark" progressStyle={{ background: 'black' }} />;
};

export default ToastProvider;
