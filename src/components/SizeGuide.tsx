import { useState } from "react";
import { Button } from "@/components/ui/button";

const SizeGuide = () => {
  const [selectedBreed, setSelectedBreed] = useState("warmblood");

  const sizeData = {
    warmblood: {
      name: "Полукровные",
      saddle: '17-18"',
      blanket: "145-155 см",
      bridle: "Full",
    },
    thoroughbred: {
      name: "Чистокровные",
      saddle: '16.5-17.5"',
      blanket: "140-150 см",
      bridle: "Full",
    },
    pony: {
      name: "Пони",
      saddle: '14-16"',
      blanket: "115-135 см",
      bridle: "Pony",
    },
    draft: {
      name: "Тяжеловозы",
      saddle: '18-19"',
      blanket: "155-165 см",
      bridle: "Extra Full",
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">
        Размерная сетка
      </h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(sizeData).map(([key, breed]) => (
          <Button
            key={key}
            variant={selectedBreed === key ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedBreed(key)}
            className={
              selectedBreed === key ? "bg-emerald-600 hover:bg-emerald-700" : ""
            }
          >
            {breed.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Седло</div>
          <div className="font-semibold text-emerald-800">
            {sizeData[selectedBreed as keyof typeof sizeData].saddle}
          </div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Попона</div>
          <div className="font-semibold text-emerald-800">
            {sizeData[selectedBreed as keyof typeof sizeData].blanket}
          </div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Уздечка</div>
          <div className="font-semibold text-emerald-800">
            {sizeData[selectedBreed as keyof typeof sizeData].bridle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
