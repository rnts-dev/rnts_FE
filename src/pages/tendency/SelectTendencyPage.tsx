import { Header, PagePadding, TendencyConfirmBtnWrap, TendencyList } from '@/widgets/tendency';
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
