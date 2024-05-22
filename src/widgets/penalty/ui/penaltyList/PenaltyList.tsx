import './penaltyList.scss';
import { useState } from 'react';
import PenaltyHistorySelect from '@/features/penalty/ui/penaltyHistorySelect/PenaltyHistorySelect';
import PenaltyCardList from '../penaltyCardList/PenaltyCardList';

const PenaltyList = () => {
  const [selected, setSelected] = useState('받은 패널티');

  return (
    <>
      <PenaltyHistorySelect selected={selected} setSelected={setSelected} />
      <PenaltyCardList type={selected} />
    </>
  );
};

export default PenaltyList;
