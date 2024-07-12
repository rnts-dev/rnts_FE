import RNTSDatePicker from '@/shared/components/RNTSDatePicker/RNTSDatePicker';
import RNTSTimePicker from '@/shared/components/RNTSTimePicker/RNTSTimePicker';
import { DialogType, useDialog } from '@/shared/hooks/modal/useDialog';
import { Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './preview.scss';

const PreviewPage = () => {
  // 필요한만큼의 다이얼로그를 선언 합니다.
  const confirm = useDialog({});
  const alert = useDialog({});

  // 다이얼로그 오픈 로직
  const handleOpenConfirmModal = async () => {
    confirm.open({
      type: DialogType.CONFIRM,
      header: '초대받은 약속',
      children: <p>사당식당 밥 약속</p>,
      cancelProps: {
        component: <button>거절</button>,
        onClick: () => confirm.close,
      },
      confirmProps: {
        component: <button>초대 수락</button>,
        onClick: () => {
          console.log('초대 수락 클릭');
          confirm.close();
        },
      },
    });
  };

  const handleOpenAlertModal = async () => {
    alert.open({
      type: DialogType.ALERT,
      header: '출발했어?',
      children: <p>캐릭터 일러스트</p>,
      confirmProps: {
        component: <p>오늘은 아무도 안 늦었어요</p>,
        onClick: () => {
          console.log('확인');
          confirm.close();
        },
      },
    });
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
            <TabPanel>{/* <Timeline /> */}</TabPanel>
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

        {/* 다이얼로그 렌더 하는 부분 */}
        {confirm.rendered()}
        {alert.rendered()}
      </div>
    </>
  );
};

export default PreviewPage;
