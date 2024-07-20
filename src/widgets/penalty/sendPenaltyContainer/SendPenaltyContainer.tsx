import './sendPenaltyContainer.scss';

export const SendPenaltyContainer = ({ select, setSelect }: { select: string; setSelect: (state: string) => void }) => {
  return (
    <div className="send_penalty_penalty_conatiner">
      <div onClick={() => setSelect('meal')} className={select === 'meal' ? 'send_penalty_penalty_box select' : 'send_penalty_penalty_box'}>
        밥 쏘기
      </div>
      <div onClick={() => setSelect('shortform')} className={select === 'shortform' ? 'send_penalty_penalty_box select' : 'send_penalty_penalty_box'}>
        길거리에서 숏폼 찍기
      </div>
      <div onClick={() => setSelect('selfi')} className={select === 'selfi' ? 'send_penalty_penalty_box select' : 'send_penalty_penalty_box'}>
        모르는 사람과 셀카 찍기
      </div>
      <input
        className={select === '' || select === 'meal' || select === 'shortform' || select === 'selfi' ? 'send_penalty_penalty_box' : 'send_penalty_penalty_box select'}
        type="text"
        placeholder="직접 입력"
        onChange={(e) => setSelect(e.target.value)}
      />
    </div>
  );
};
