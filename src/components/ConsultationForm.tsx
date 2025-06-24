import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    discipline: "",
    horseBreed: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert("Спасибо! Мы свяжемся с вами в течение дня для консультации.");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">
        Консультация по подбору амуниции
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>

        <div>
          <Label htmlFor="discipline">Дисциплина</Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, discipline: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите дисциплину" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dressage">Выездка</SelectItem>
              <SelectItem value="jumping">Конкур</SelectItem>
              <SelectItem value="eventing">Троеборье</SelectItem>
              <SelectItem value="other">Другое</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="breed">Порода лошади</Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, horseBreed: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите породу" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="warmblood">Полукровная</SelectItem>
              <SelectItem value="thoroughbred">Чистокровная</SelectItem>
              <SelectItem value="pony">Пони</SelectItem>
              <SelectItem value="draft">Тяжеловоз</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Что вас интересует?</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Опишите, какая амуниция вам нужна..."
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
        >
          Получить консультацию
        </Button>
      </form>
    </div>
  );
};

export default ConsultationForm;
