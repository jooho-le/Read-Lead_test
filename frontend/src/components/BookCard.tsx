interface BookCardProps {
  image: string;
  title: string;
  author: string;
}

export default function BookCard({ image, title, author }: BookCardProps) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
      </div>
    </div>
  );
}
