import RNTSBottomSlide from '@/shared/components/RNTSBottomSlide';
import RNTSDatePicker from '@/shared/components/RNTSDatePicker/RNTSDatePicker';
import RNTSTimePicker from '@/shared/components/RNTSTimePicker';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './preview.scss';

export default function PreviewPage() {
  return (
    <div className="preview-page">
      <Tabs isLazy>
        <TabList>
          <Tab>DatePicker</Tab>
          <Tab>Timeline</Tab>
          <Tab>BottomSlide</Tab>
          <Tab>TimePicker</Tab>
          <Tab>..</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <RNTSDatePicker onSave={() => console.log('날짜 선택')} />
          </TabPanel>
          <TabPanel>
            <Timeline />
          </TabPanel>
          <TabPanel>
            <RNTSBottomSlide>
              <RNTSDatePicker onSave={() => console.log('날짜 선택')} />
            </RNTSBottomSlide>
          </TabPanel>
          <TabPanel>
            <RNTSTimePicker onSave={() => console.log('날짜 선택')} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
