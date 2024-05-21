import RNTSDatePicker from '@/shared/components/RNTSDatePicker/RNTSDatePicker';
import { Divider } from '@chakra-ui/react';
import './preview.scss';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';

export default function PreviewPage() {
  return (
    <div className="preview-page">
      <RNTSDatePicker onSave={() => console.log('날짜 선택')} />
      <Divider />
      <Timeline />
    </div>
  );
}
