import './description.scss';

interface DescriptionProps {
  title: string;
  description: string;
}

export const Description = ({ title, description }: DescriptionProps) => {
  return (
    <div className="appointment_create_page_description">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
