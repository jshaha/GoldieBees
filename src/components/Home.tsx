import React from 'react';
import { Heart, Star, MapPin, Clock, Phone } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-warm-brown-50 to-coral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-warm-brown-800 mb-6 leading-tight">
                Welcome to
                <span className="block text-coral-600">Goldiebees</span>
              </h1>
              <p className="text-xl font-open-sans text-warm-brown-600 mb-8 leading-relaxed">
                Where every thread tells a story and every quilt holds memories. 
                Discover beautiful fabrics, learn timeless techniques, and create 
                heirlooms that will warm hearts for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="fabric-button bg-coral-600 text-white px-8 py-4 rounded-lg font-open-sans font-semibold hover:bg-coral-700 transition-all transform hover:scale-105">
                  Shop Fabrics
                </button>
                <button className="fabric-button-outline border-2 border-warm-brown-600 text-warm-brown-600 px-8 py-4 rounded-lg font-open-sans font-semibold hover:bg-warm-brown-600 hover:text-white transition-all">
                  View Classes
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="stitched-border-thick rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/6913464/pexels-photo-6913464.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Beautiful quilts display" 
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-coral-600 rounded-full flex items-center justify-center stitched-border">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-warm-brown-800 mb-4">
              Why Choose Goldiebees?
            </h2>
            <p className="text-xl font-open-sans text-warm-brown-600 max-w-3xl mx-auto">
              We're more than just a quilt shop – we're a community of passionate crafters 
              dedicated to preserving the art of quilting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Premium Fabrics",
                description: "Hand-selected, high-quality fabrics from trusted suppliers worldwide."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Expert Guidance",
                description: "Learn from experienced quilters with decades of combined expertise."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Community Hub",
                description: "Connect with fellow quilters and share your passion for the craft."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-6 stitched-border group-hover:bg-coral-200 transition-colors">
                  <div className="text-coral-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-4">
                  {feature.title}
                </h3>
                <p className="font-open-sans text-warm-brown-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-warm-brown-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Store Hours",
                info: "Wed: 10AM-5PM\nThu: 10AM-5PM\nFri: 9AM-5PM\nSat: 10AM-2PM"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                info: "909-524-8218"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                info: "1030 First Ave.\nGibbon, ST 12345"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Owner",
                info: "Carol Brown"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-coral-600 rounded-full flex items-center justify-center mx-auto mb-4 stitched-border">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-playfair font-semibold text-warm-brown-800 mb-2">
                  {item.title}
                </h4>
                <p className="font-open-sans text-warm-brown-600 text-sm whitespace-pre-line">
                  {item.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;