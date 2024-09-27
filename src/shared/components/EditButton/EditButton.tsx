import IoMore from '@/assets/more.svg';
import IoRemove from '@/assets/remove.svg';

interface EditButton {
  onClick: () => void;
  type: 'EDIT' | 'DELETE';
}

const EditButton = (props: EditButton) => {
  const { onClick, type } = props;
  return <img src={type === 'DELETE' ? IoRemove : IoMore} onClick={onClick} />;
};

export default EditButton;
