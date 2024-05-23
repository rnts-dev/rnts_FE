import Header from '@/widgets/tendency/header/Header';
import PagePadding from '@/widgets/tendency/pagePadding/PagePadding';
import TendencyConfirmBtnWrap from '@/widgets/tendency/tendencyConfirmBtnWrap/TendencyConfirmBtnWrap';
import TendencyList from '@/widgets/tendency/tendencyList/TendencyList';
import { useState } from 'react';

const SelectTendencyPage = () => {
  const [select, setSelect] = useState('ealry');

  return (
    <>
      <PagePadding>
        <Header />
        <TendencyList select={select} setSelect={setSelect} />
        <TendencyConfirmBtnWrap />
      </PagePadding>
    </>
  );
};

export default SelectTendencyPage;
