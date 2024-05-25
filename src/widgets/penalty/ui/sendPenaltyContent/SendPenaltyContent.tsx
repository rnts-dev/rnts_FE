import PenaltySelectBtn from '@/entities/penalty/ui/penaltySelectBtn/PenaltySelectBtn';
import './sendPenaltyContent.scss';
import { useState } from 'react';
import coinIllust from '@/assets/coin_illust.png';
import hammerIllust from '@/assets/hammer_illust.png';

const SendPenaltyContent = () => {
  const [isSelect, setIsSelect] = useState('late');

  return (
    <div className="penalty_send_content_container">
      <PenaltySelectBtn id="late" title="“출발했어?”" description="역시 금융 치료가 최고죠!" illust={coinIllust} select={isSelect} onClick={() => setIsSelect('late')} />
      <PenaltySelectBtn id="penalty" title="“출발했어!”" description="살벌한 벌칙이 기다리고 있어요" illust={hammerIllust} select={isSelect} onClick={() => setIsSelect('penalty')} />
    </div>
  );
};

export default SendPenaltyContent;
