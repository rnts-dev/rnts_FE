import { Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import './index.scss';

export default function RNTSBottomSlide({ children, isOpen, onClose }: { children: React.ReactNode; isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Drawer</Button> */}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent className="bottom-slide__content">
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
