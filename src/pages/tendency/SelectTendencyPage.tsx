import PrimaryBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import Header from '@/widgets/tendency/header/Header';
import PagePadding from '@/widgets/tendency/pagePadding/PagePadding';
import TendencyList from '@/widgets/tendency/tendencyList/TendencyList';
import { useState } from 'react';

const SelectTendencyPage = () => {
  const [select, setSelect] = useState('ealry');

  return (
    <>
      <PagePadding>
        <Header />
        <TendencyList select={select} setSelect={setSelect} />
        <PrimaryBtn
          text="다음"
          onClick={() => {
            console.log('다음 로직');
          }}
        />
        <div style={{ marginBottom: '38px' }}></div>
      </PagePadding>
    </>
  );
};

export default SelectTendencyPage;
