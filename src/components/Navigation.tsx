import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'catalog', label: 'Fabric Catalog' },
    { id: 'classes', label: 'Classes & Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-warm-brown-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-warm-brown-600 rounded-full flex items-center justify-center stitched-border">
              <Heart className="w-6 h-6 text-cream-50" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-warm-brown-800">Goldiebees</h1>
              <p className="text-sm text-warm-brown-600 font-open-sans">Quilt Shop</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-open-sans font-medium transition-all duration-200 relative ${
                  activeTab === tab.id
                    ? 'text-coral-600 after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-coral-600 after:rounded-full'
                    : 'text-warm-brown-700 hover:text-coral-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-warm-brown-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-warm-brown-700" />
            ) : (
              <Menu className="w-6 h-6 text-warm-brown-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-warm-brown-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 font-open-sans font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-coral-600 bg-coral-50'
                    : 'text-warm-brown-700 hover:text-coral-600 hover:bg-warm-brown-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;