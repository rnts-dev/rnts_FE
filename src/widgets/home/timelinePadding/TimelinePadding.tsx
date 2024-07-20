import './timelinePadding.scss';

interface TimelinePadding {
  children: React.ReactNode;
}

export const TimelinePadding = ({ children }: TimelinePadding) => {
  return <div className="home_timeline_padding">{children}</div>;
};
