import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import './tendencyConfirmBtnWrap.scss';
import { useNavigate } from 'react-router-dom';

const TendencyConfirmBtnWrap = () => {
  const navigate = useNavigate();

  return (
    <button className="tendency_confirm_btn_wrap">
      <PrimaryShinBtn
        text="다음"
        onClick={() => {
          navigate('/');
        }}
      />
    </button>
  );
};

export default TendencyConfirmBtnWrap;
