import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import RNTSDatePicker from '@/shared/components/RNTSDatePicker/RNTSDatePicker';
import './preview.scss';
import RNTSBottomSlide from '@/shared/components/RNTSBottomSlide';
import RNTSTimePicker from '@/shared/components/RNTSTimePicker';

export default function PreviewPage() {
  return (
    <div className="preview-page">
      <Tabs isLazy>
        <TabList>
          <Tab>DatePicker</Tab>
          <Tab>timeline</Tab>
          <Tab>BottomSlide</Tab>
          <Tab>TimePicker</Tab>
          <Tab>..</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <RNTSDatePicker onSave={() => console.log('날짜 선택')} />
          </TabPanel>
          <TabPanel>
            <p>timeline component</p>
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
