import './sendPenaltyContent.scss';
import coinIllust from '@/assets/coin_illust.png';
import hammerIllust from '@/assets/hammer_illust.png';
import { PenaltySelectBtn } from '@/components/penalty';

export const SendPenaltyContent = ({ penaltyType, onChangePenaltyType }: { penaltyType: string; onChangePenaltyType: any }) => {
  return (
    <div className="penalty_send_content_container">
      <PenaltySelectBtn id="late" title="“출발했어?”" description="역시 금융 치료가 최고죠!" illust={coinIllust} select={penaltyType} onClick={() => onChangePenaltyType('late')} />
      <PenaltySelectBtn id="penalty" title="“출발했어!”" description="살벌한 벌칙이 기다리고 있어요" illust={hammerIllust} select={penaltyType} onClick={() => onChangePenaltyType('penalty')} />
    </div>
  );
};
