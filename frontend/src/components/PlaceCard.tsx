interface PlaceCardProps {
  image: string;
  place: string;
  description: string;
}

export default function PlaceCard({ image, place, description }: PlaceCardProps) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition">
      <img src={image} alt={place} className="w-full h-48 object-cover rounded-t" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{place}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
