import './skipBtn.scss';

export const SkipBtn = () => {
  return (
    <div className="penalty_send_skip_container">
      <button className="penalty_send_skip_btn" onClick={() => console.log('skip button')}>
        이번만 용서할게요
      </button>
    </div>
  );
};
