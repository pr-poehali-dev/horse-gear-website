import { Button } from "@/components/ui/button";

interface DisciplineFilterProps {
  selectedDiscipline: string;
  onDisciplineChange: (discipline: string) => void;
}

const disciplines = [
  { id: "all", name: "Все дисциплины", icon: "🏇" },
  { id: "dressage", name: "Выездка", icon: "💃" },
  { id: "jumping", name: "Конкур", icon: "🦘" },
  { id: "eventing", name: "Троеборье", icon: "🏆" },
];

const DisciplineFilter = ({
  selectedDiscipline,
  onDisciplineChange,
}: DisciplineFilterProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Дисциплины</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {disciplines.map((discipline) => (
          <Button
            key={discipline.id}
            variant={
              selectedDiscipline === discipline.id ? "default" : "outline"
            }
            onClick={() => onDisciplineChange(discipline.id)}
            className={`flex items-center justify-center p-3 ${
              selectedDiscipline === discipline.id
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "hover:bg-emerald-50"
            }`}
          >
            <span className="mr-2">{discipline.icon}</span>
            <span className="text-sm">{discipline.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DisciplineFilter;
