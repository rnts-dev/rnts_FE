import './fine.scss';

export const FineInput = ({ placeholder, onChange, value }: { placeholder: string; onChange: any; value: string }) => {
  return (
    <div className="send_penalty_fine_input">
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
      <p>원</p>
    </div>
  );
};
