import './timelinePadding.scss';

interface TimelinePadding {
  children: React.ReactNode;
}

const TimelinePadding = ({ children }: TimelinePadding) => {
  return <div className="home_timeline_padding">{children}</div>;
};

export default TimelinePadding;
