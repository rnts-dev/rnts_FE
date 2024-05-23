import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import './sendPenaltyBtnContainer.scss';
import SkipBtn from '@/entities/penalty/ui/skipBtn/SkipBtn';

const SendPenaltyBtnContainer = () => {
  return (
    <div className="send_penalty_btn_container">
      <PrimaryShinBtn
        text="다음"
        onClick={() => {
          console.log('다음 로직');
        }}
      />
      <SkipBtn />
    </div>
  );
};

export default SendPenaltyBtnContainer;
