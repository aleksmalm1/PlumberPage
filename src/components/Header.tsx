import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../pictures/MALM & KO OÜ final.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Malm & Ko Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-white">Malm & Ko</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-200 hover:text-blue-400 transition-colors">Kodu</a>
            <a href="#services" className="text-gray-200 hover:text-blue-400 transition-colors">Teenused</a>
            <a href="#about" className="text-gray-200 hover:text-blue-400 transition-colors">Meist</a>
            <a href="#contact" className="text-gray-200 hover:text-blue-400 transition-colors">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#home" className="block text-gray-200 hover:text-blue-400 transition-colors">Kodu</a>
            <a href="#services" className="block text-gray-200 hover:text-blue-400 transition-colors">Teenused</a>
            <a href="#about" className="block text-gray-200 hover:text-blue-400 transition-colors">Meist</a>
            <a href="#contact" className="block text-gray-200 hover:text-blue-400 transition-colors">Kontakt</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;