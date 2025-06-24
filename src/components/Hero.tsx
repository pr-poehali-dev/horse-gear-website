import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Профессиональная амуниция для конного спорта
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100">
            Вальтрапы, уздечки, попоны для выездки, конкура и троеборья
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
            >
              <Link to="/catalog">Смотреть каталог</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-800"
            >
              <Link to="/consultation">Получить консультацию</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20">🏇</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-20">🏆</div>
    </section>
  );
};

export default Hero;
