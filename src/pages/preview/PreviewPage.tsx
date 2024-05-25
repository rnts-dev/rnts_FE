import RNTSDatePicker from '@/shared/components/RNTSDatePicker/RNTSDatePicker';
import RNTSTimePicker from '@/shared/components/RNTSTimePicker';
import useGlobalModal from '@/shared/manager/confirm/useHandleConfirm';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import { Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './preview.scss';

export default function PreviewPage() {
  const { prompt } = useGlobalModal();

  const handleOpenConfirmModal = async () => {
    const modal = await prompt({
      type: 'confirm',
      header: '초대받은 약속',
      contents: <p>사당식당 밥 약속</p>,
      confirmTitle: '초대 수락',
      cancelTitle: '거절',
    });

    if (modal) {
      console.log('확인 눌렀을 때의 액션 넣으면 됩니다.');
    }
    if (!modal) {
      console.log('취소 눌렀을 때의 액션 넣으면 됩니다.');
    }
  };

  const handleOpenAlertModal = async () => {
    const modal = await prompt({
      type: 'alert',
      header: '출발했어?',
      description: '2분 빨리 도착했어요',
      contents: <p>캐릭터 일러스트</p>,
      confirmTitle: '오늘은 아무도 안 늦었어요',
    });

    if (modal) {
      console.log('확인 눌렀을 때의 액션 넣으면 됩니다.');
    }
    if (!modal) {
      console.log('취소 눌렀을 때의 액션 넣으면 됩니다.');
    }
  };

  return (
    <>
      <div className="preview-page">
        <Tabs isLazy>
          <TabList>
            <Tab>DatePicker</Tab>
            <Tab>Timeline</Tab>
            <Tab>BottomSlide</Tab>
            <Tab>TimePicker</Tab>
            <Tab>Modal</Tab>
            <Tab>..</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <RNTSDatePicker onClose={() => {}} />
            </TabPanel>
            <TabPanel>
              <Timeline />
            </TabPanel>
            <TabPanel>
              {/* <RNTSBottomSlide is>
                <RNTSDatePicker onSave={() => console.log('날짜 선택')} />
              </RNTSBottomSlide> */}
            </TabPanel>
            <TabPanel>
              <RNTSTimePicker onClose={() => {}} />
            </TabPanel>
            <TabPanel>
              <Flex flexDirection="column" gap={2}>
                <Button onClick={handleOpenConfirmModal}> confirm click (수락,거절 등 하단 버튼 2개)</Button>
                <Button onClick={handleOpenAlertModal}>alert click (하단 버튼 1개)</Button>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
}
