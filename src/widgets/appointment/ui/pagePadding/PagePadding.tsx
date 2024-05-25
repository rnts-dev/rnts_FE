import './pagePadding.scss';

interface PagePaddingProps {
  children: React.ReactNode;
}

const PagePadding = ({ children }: PagePaddingProps) => {
  return <div className="appointment_create_page_padding">{children}</div>;
};

export default PagePadding;
