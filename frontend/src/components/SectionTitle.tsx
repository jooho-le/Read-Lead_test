interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-xl font-bold mb-4 mt-8 border-b pb-2">{title}</h2>
  );
}
