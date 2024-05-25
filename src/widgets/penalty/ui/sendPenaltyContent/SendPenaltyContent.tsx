import PenaltySelectBtn from '@/entities/penalty/ui/penaltySelectBtn/PenaltySelectBtn';
import './sendPenaltyContent.scss';
import { useState } from 'react';

const SendPenaltyContent = () => {
  const [isSelect, setIsSelect] = useState('late');

  return (
    <div className="penalty_send_content_container">
      <PenaltySelectBtn id="late" title="“출발했어?”" description="역시 금융 치료가 최고죠!" select={isSelect} onClick={() => setIsSelect('late')} />
      <PenaltySelectBtn id="penalty" title="“출발했어!”" description="살벌한 벌칙이 기다리고 있어요" select={isSelect} onClick={() => setIsSelect('penalty')} />
    </div>
  );
};

export default SendPenaltyContent;
