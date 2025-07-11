import React, { useState } from 'react';
import { Heart, Star, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  creator: string;
  technique: string;
  year: number;
  featured: boolean;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Autumn Harvest",
      description: "A beautiful fall-themed quilt featuring warm oranges, deep reds, and golden yellows.",
      image: "https://images.pexels.com/photos/6913464/pexels-photo-6913464.jpeg?auto=compress&cs=tinysrgb&w=800",
      creator: "Margaret Thompson",
      technique: "Traditional Piecing",
      year: 2023,
      featured: true
    },
    {
      id: 2,
      title: "Ocean Waves",
      description: "Modern interpretation of the classic ocean waves pattern using contemporary fabrics.",
      image: "https://images.pexels.com/photos/6913471/pexels-photo-6913471.jpeg?auto=compress&cs=tinysrgb&w=800",
      creator: "Sarah Johnson",
      technique: "Modern Quilting",
      year: 2023,
      featured: false
    },
    {
      id: 3,
      title: "Garden Party",
      description: "Delicate floral appliqué work showcasing spring flowers and butterflies.",
      image: "https://images.pexels.com/photos/6913449/pexels-photo-6913449.jpeg?auto=compress&cs=tinysrgb&w=800",
      creator: "Emma Wilson",
      technique: "Appliqué",
      year: 2023,
      featured: true
    },
    {
      id: 4,
      title: "Geometric Dreams",
      description: "Bold geometric patterns in black and white with precise paper piecing.",
      image: "https://images.pexels.com/photos/6913452/pexels-photo-6913452.jpeg?auto=compress&cs=tinysrgb&w=800",
      creator: "Class Student",
      technique: "Paper Piecing",
      year: 2023,
      featured: false
    },
    {
      id: 5,
      title: "Vintage Charm",
      description: "Reproduction fabrics create a nostalgic feeling in this traditional pattern.",
      image: "https://images.pexels.com/photos/6913457/pexels-photo-6913457.jpeg?auto=compress&cs=tinysrgb&w=800",
      creator: "Margaret Thompson",
      technique: "Traditional Piecing",
      year: 2022,
      featured: false
    },
    {
      id: 6,
      title: "Starry Night",
      description: "Hand-quilted masterpiece featuring intricate star patterns and celestial motifs.",
      image: "https://images.pexels.com/photos/6913523/pexels-photo-6913523.jpeg?auto=compress&cs=tinysrgb&w=800",
      creator: "Sarah Johnson",
      technique: "Hand Quilting",
      year: 2023,
      featured: true
    },
    {
      id: 7,
      title: "Prairie Flowers",
      description: "Soft pastels and delicate embroidery work create a romantic garden scene.",
      image: "https://images.pexels.com/photos/6864513/pexels-photo-6864513.jpeg?auto=compress&cs=tinysrgb&w=800",
      creator: "Emma Wilson",
      technique: "Embroidery",
      year: 2023,
      featured: false
    },
    {
      id: 8,
      title: "Modern Minimalist",
      description: "Clean lines and negative space create a contemporary aesthetic.",
      image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800",
      creator: "Class Student",
      technique: "Modern Quilting",
      year: 2023,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Quilts' },
    { id: 'featured', label: 'Featured' },
    { id: 'Traditional Piecing', label: 'Traditional' },
    { id: 'Modern Quilting', label: 'Modern' },
    { id: 'Appliqué', label: 'Appliqué' },
    { id: 'Paper Piecing', label: 'Paper Piecing' }
  ];

  const filteredItems = galleryItems.filter(item => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'featured') return item.featured;
    return item.technique === selectedCategory;
  });

  const openModal = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex].id);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex].id);
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-playfair font-bold text-warm-brown-800 mb-6">
            Gallery
          </h1>
          <p className="text-xl font-open-sans text-warm-brown-600 max-w-3xl mx-auto">
            Explore the beautiful quilts created by our talented community of quilters. 
            From traditional patterns to modern interpretations, each piece tells a unique story.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-open-sans font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-coral-600 text-white stitched-border'
                  : 'bg-warm-brown-100 text-warm-brown-700 hover:bg-warm-brown-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer stitched-border"
              onClick={() => openModal(item.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Eye className="w-6 h-6 text-coral-600" />
                  </div>
                </div>
                {item.featured && (
                  <div className="absolute top-3 right-3 bg-coral-600 text-white px-3 py-1 rounded-full text-sm font-open-sans font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-playfair font-semibold text-warm-brown-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-open-sans text-warm-brown-600 mb-2">
                  by {item.creator}
                </p>
                <p className="text-xs font-open-sans text-warm-brown-500">
                  {item.technique} • {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && selectedItem && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden stitched-border">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-warm-brown-700" />
              </button>
              
              <div className="grid lg:grid-cols-2 h-full">
                <div className="relative">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-warm-brown-700" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-warm-brown-700" />
                  </button>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    {selectedItem.featured && (
                      <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-600 px-3 py-1 rounded-full text-sm font-open-sans font-medium mb-4">
                        <Star className="w-4 h-4" />
                        Featured
                      </div>
                    )}
                    <h2 className="text-3xl font-playfair font-bold text-warm-brown-800 mb-2">
                      {selectedItem.title}
                    </h2>
                    <p className="text-lg font-open-sans text-coral-600 mb-4">
                      by {selectedItem.creator}
                    </p>
                  </div>
                  
                  <p className="font-open-sans text-warm-brown-600 mb-6">
                    {selectedItem.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-open-sans font-semibold text-warm-brown-700">Technique:</span>
                      <span className="font-open-sans text-warm-brown-600">{selectedItem.technique}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-open-sans font-semibold text-warm-brown-700">Year:</span>
                      <span className="font-open-sans text-warm-brown-600">{selectedItem.year}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-4">
                    <button className="fabric-button bg-coral-600 text-white px-6 py-3 rounded-lg font-open-sans font-semibold hover:bg-coral-700 transition-all">
                      Learn This Technique
                    </button>
                    <button className="fabric-button-outline border-2 border-warm-brown-600 text-warm-brown-600 px-6 py-3 rounded-lg hover:bg-warm-brown-600 hover:text-white transition-all flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        <div className="mt-20 bg-warm-brown-50 rounded-2xl p-12 stitched-border">
          <h2 className="text-3xl font-playfair font-bold text-warm-brown-800 mb-8 text-center">
            What Our Quilters Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The classes at Goldiebees transformed my quilting. The instructors are patient and skilled, and the atmosphere is so welcoming.",
                author: "Linda M.",
                project: "Autumn Harvest Quilt"
              },
              {
                quote: "I never thought I could create something so beautiful. The support from the community here is incredible.",
                author: "Jennifer R.",
                project: "First Quilt Project"
              },
              {
                quote: "This is more than a quilt shop - it's a family. I've made lifelong friends and learned techniques I'll treasure forever.",
                author: "Carol S.",
                project: "Advanced Appliqué"
              }
            ].map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 stitched-border mb-4">
                  <p className="font-open-sans text-warm-brown-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center gap-2 text-coral-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-playfair font-semibold text-warm-brown-800">
                  {testimonial.author}
                </p>
                <p className="text-sm font-open-sans text-warm-brown-600">
                  {testimonial.project}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;