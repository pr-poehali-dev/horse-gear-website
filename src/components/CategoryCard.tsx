import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  disciplines: string[];
}

const CategoryCard = ({
  title,
  description,
  image,
  link,
  disciplines,
}: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center overflow-hidden">
        <img
          src={
            image.startsWith("http")
              ? image
              : title === "Вальтрапы"
                ? `https://cdn.poehali.dev/files/40d259a7-9143-4021-954a-dad93c61e619.jpg`
                : `https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80`
          }
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {disciplines.map((discipline) => (
            <span
              key={discipline}
              className="px-2 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full"
            >
              {discipline}
            </span>
          ))}
        </div>

        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Link to={link}>Смотреть товары</Link>
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
