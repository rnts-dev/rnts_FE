import './pagePadding.scss';

interface PagePaddingProps {
  children: React.ReactNode;
}

const PagePadding = ({ children }: PagePaddingProps) => {
  return <div className="penalty_send_page_padding">{children}</div>;
};

export default PagePadding;
