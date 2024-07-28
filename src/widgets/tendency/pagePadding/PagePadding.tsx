import './pagePadding.scss';

interface PagePaddingProps {
  children: React.ReactNode;
}

export const PagePadding = ({ children }: PagePaddingProps) => {
  return <div className="tendency_page_padding">{children}</div>;
};
