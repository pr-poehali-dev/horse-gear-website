import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🐎</span>
              <span className="text-xl font-bold">EquestrianPro</span>
            </div>
            <p className="text-gray-300 text-sm">
              Профессиональная амуниция для конного спорта. Качество,
              проверенное временем.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/valtrap" className="text-gray-300 hover:text-white">
                  Вальтрапы
                </Link>
              </li>
              <li>
                <Link to="/bridles" className="text-gray-300 hover:text-white">
                  Уздечки
                </Link>
              </li>
              <li>
                <Link to="/blankets" className="text-gray-300 hover:text-white">
                  Попоны
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-white">
                  Весь каталог
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/consultation"
                  className="text-gray-300 hover:text-white"
                >
                  Консультация
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-white">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-white">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/size-guide"
                  className="text-gray-300 hover:text-white"
                >
                  Размерные сетки
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@equestrianpro.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, Конноспортивная ул.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 EquestrianPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
