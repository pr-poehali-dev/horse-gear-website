import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import DisciplineFilter from "@/components/DisciplineFilter";
import SizeGuide from "@/components/SizeGuide";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState("all");

  const categories = [
    {
      title: "Вальтрапы",
      description: "Профессиональные вальтрапы для всех дисциплин",
      image: "🎯",
      link: "/valtrap",
      disciplines: ["Выездка", "Конкур", "Троеборье"],
    },
    {
      title: "Уздечки",
      description: "Качественные уздечки для комфорта лошади",
      image: "🎪",
      link: "/bridles",
      disciplines: ["Выездка", "Конкур"],
    },
    {
      title: "Попоны",
      description: "Защитные попоны на все случаи жизни",
      image: "🛡️",
      link: "/blankets",
      disciplines: ["Универсальные"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Discipline Filter */}
        <section className="mb-12">
          <DisciplineFilter
            selectedDiscipline={selectedDiscipline}
            onDisciplineChange={setSelectedDiscipline}
          />
        </section>

        {/* Featured Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Категории товаров
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                image={category.image}
                link={category.link}
                disciplines={category.disciplines}
              />
            ))}
          </div>
        </section>

        {/* Size Guide & Consultation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SizeGuide />
          <ConsultationForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
