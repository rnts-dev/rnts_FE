import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import './sendPenaltyBtnContainer.scss';

import ModalManager from '@/shared/manager/modal/ModalManager';
import { useAtom } from 'jotai';
import { modalState } from '@/shared/store/atoms/modal';

import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { fetcher } from '@/shared/service/fetch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SendPenaltyContainer } from '../sendPenaltyContainer/SendPenaltyContainer';
import { FineInput, SkipBtn } from '@/components/penalty';

export const SendPenaltyBtnContainer = ({ penaltyType }: { penaltyType: string }) => {
  const [_, setModalOpen] = useAtom(modalState);
  const [fine, setFine] = useState('');
  const [select, setSelect] = useState('');
  let [query] = useSearchParams();
  const navigate = useNavigate();

  const onChnageFine = (event: ChangeEvent<HTMLInputElement>) => {
    setFine(event.target.value);
  };

  const postFinePenalty = useMutation({
    mutationFn: (fine: string) => {
      return fetcher
        .post(`/api/penalty/${query.get('uaid')}`, {
          penaltyType: 'FINE',
          content: '',
          fine,
        })
        .then((res) => res.data);
    },
  });

  const postPenalty = useMutation({
    mutationFn: (select: string) => {
      return fetcher
        .post(`/api/penalty/${query.get('uaid')}`, {
          penaltyType: 'PUNISHMENT',
          content: select,
          fine: 0,
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
            penaltyType === 'late' ? (
              <div className="send_penalty_fine_btn_container">
                <button onClick={() => setModalOpen(false)} className="send_penalty_fine_cancle">
                  취소
                </button>
                <button
                  onClick={() => {
                    postFinePenalty.mutate(fine);
                    navigate('/');
                  }}
                  className={fine ? 'send_penalty_fine_confirm select' : 'send_penalty_fine_confirm'}>
                  결정
                </button>
              </div>
            ) : (
              <div className="send_penalty_fine_btn_container">
                <button onClick={() => setModalOpen(false)} className="send_penalty_fine_cancle">
                  취소
                </button>
                <button
                  onClick={() => {
                    postPenalty.mutate(select);
                    navigate('/');
                  }}
                  className={select ? 'send_penalty_fine_confirm select' : 'send_penalty_fine_confirm'}>
                  결정
                </button>
              </div>
            )
          }>
          {penaltyType === 'late' ? <FineInput placeholder="10,000" onChange={onChnageFine} value={fine} /> : <SendPenaltyContainer select={select} setSelect={setSelect} />}
        </ModalManager>
      </div>
    </div>
  );
};
