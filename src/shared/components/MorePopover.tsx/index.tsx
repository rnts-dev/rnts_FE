import ioMore from '@/assets/more.svg';
import { Popover, PopoverCloseButton, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import * as S from './MorePopover.styled';
interface MorePopover {
  contentMetaList: Array<{ title: string; onClick: () => void }>;
  hasCloseBtn?: boolean;
}

export const MorePopover = (props: MorePopover) => {
  const { contentMetaList, hasCloseBtn } = props;

  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <button>
          <img src={ioMore} alt="io_more" />
        </button>
      </PopoverTrigger>

      <PopoverContent style={{ width: '100%', top: '-22px' }}>
        {hasCloseBtn && <PopoverCloseButton />}
        {contentMetaList.map((e) => (
          <S.PopoverBody key={e.title} onClick={e.onClick}>
            {e.title}
          </S.PopoverBody>
        ))}
      </PopoverContent>
    </Popover>
  );
};
