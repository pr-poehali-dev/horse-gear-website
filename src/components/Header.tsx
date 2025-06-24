import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🐎</span>
            <span className="text-xl font-bold text-emerald-800">
              EquestrianPro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/valtrap"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Вальтрапы
            </Link>
            <Link
              to="/bridles"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Уздечки
            </Link>
            <Link
              to="/blankets"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Попоны
            </Link>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingCart" size={20} />
              <span className="ml-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/catalog"
                className="text-gray-700 hover:text-emerald-600 py-2"
              >
                Каталог
              </Link>
              <Link
                to="/valtrap"
                className="text-gray-700 hover:text-emerald-600 py-2"
              >
                Вальтрапы
              </Link>
              <Link
                to="/bridles"
                className="text-gray-700 hover:text-emerald-600 py-2"
              >
                Уздечки
              </Link>
              <Link
                to="/blankets"
                className="text-gray-700 hover:text-emerald-600 py-2"
              >
                Попоны
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
