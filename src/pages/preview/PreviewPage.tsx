import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import RNTSDatePicker from '@/shared/components/RNTSDatePicker/RNTSDatePicker';
import './preview.scss';

export default function PreviewPage() {
  return (
    <div className="preview-page">
      <Tabs>
        <TabList>
          <Tab>DatePicker</Tab>
          <Tab>timeline</Tab>
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
            <p>..!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
