import React, { useState } from 'react';
import { Heart, Phone, Mail, MapPin, Calendar, ShoppingBag, Users, Star, Menu, X } from 'lucide-react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import FabricCatalog from './components/FabricCatalog';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'catalog':
        return <FabricCatalog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-20">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;