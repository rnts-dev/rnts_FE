import FineInput from '@/entities/penalty/ui/fineInput/FineInput';
import SkipBtn from '@/entities/penalty/ui/skipBtn/SkipBtn';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import ModalManager from '@/shared/manager/modal/ModalManager';
import { fetcher } from '@/shared/service/fetch';
import { modalState } from '@/shared/store/atoms/modal';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './sendPenaltyBtnContainer.scss';

const SendPenaltyBtnContainer = ({ penaltyType }: { penaltyType: string }) => {
  const [_, setModalOpen] = useAtom(modalState);
  const [fine, setFine] = useState('');
  let [query] = useSearchParams();
  console.log(query.get('uaid'));
  const onChnageFine = (event: ChangeEvent<HTMLInputElement>) => {
    setFine(event.target.value);
  };

  const postFinePenalty = useMutation({
    mutationFn: (fine: string) => {
      return fetcher
        .post(`/api/penalty/${query.get('uaid')}`, {
          fine,
        })
        .then((res) => res.data);
    },
  });

  return (
    <div className="send_penalty_btn_container">
      <PrimaryShinBtn text="다음" onClick={() => setModalOpen(true)} />
      <SkipBtn />
      <div className="send_penalty_modal">
        <ModalManager
          title={penaltyType === 'late' ? '지각비 걷기' : '벌칙 주기'}
          description={penaltyType === 'late' ? '얼마나 걷을까요?' : '지각자에게 선사할 벌칙을 정하세요.'}
          button={
            penaltyType === 'late' && (
              <div className="send_penalty_fine_btn_container">
                <button onClick={() => setModalOpen(false)} className="send_penalty_fine_cancle">
                  취소
                </button>
                <button onClick={async () => await postFinePenalty.mutate(fine)} className={fine ? 'send_penalty_fine_confirm select' : 'send_penalty_fine_confirm'}>
                  결정
                </button>
              </div>
            )
          }>
          {penaltyType === 'late' && <FineInput placeholder="10,000" onChange={onChnageFine} value={fine} />}
        </ModalManager>
      </div>
    </div>
  );
};

export default SendPenaltyBtnContainer;
