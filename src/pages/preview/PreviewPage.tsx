import React, { useRef, useEffect } from 'react';
import RNTSDatePicker from '@/shared/components/RNTSDatePicker/RNTSDatePicker';
import './preview.scss';
import { Container, Flex, SimpleGrid } from '@chakra-ui/react';

export default function PreviewPage() {
  return (
    <>
      <div className="preview-page__container">
        <RNTSDatePicker onSave={() => console.log('날짜 선택')} />
      </div>
    </>
  );
}
