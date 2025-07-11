import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Star, ExternalLink, Filter, Search } from 'lucide-react';

interface EtsyListing {
  listing_id: number;
  title: string;
  price: string;
  currency_code: string;
  quantity: number;
  images: Array<{ url_570xN: string }>;
  url: string;
  tags: string[];
  materials: string[];
  creation_timestamp: number;
}

const FabricCatalog: React.FC = () => {
  const [listings, setListings] = useState<EtsyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for demonstration - replace with actual Etsy API integration
  const mockListings: EtsyListing[] = [
    {
      listing_id: 1,
      title: "Vintage Floral Cotton Fabric Bundle - 6 Fat Quarters",
      price: "24.99",
      currency_code: "USD",
      quantity: 15,
      images: [{ url_570xN: "https://images.pexels.com/photos/6864513/pexels-photo-6864513.jpeg?auto=compress&cs=tinysrgb&w=570" }],
      url: "https://etsy.com/listing/1",
      tags: ["cotton", "floral", "vintage"],
      materials: ["cotton"],
      creation_timestamp: Date.now()
    },
    {
      listing_id: 2,
      title: "Premium Quilting Cotton - Autumn Leaves Collection",
      price: "18.50",
      currency_code: "USD",
      quantity: 8,
      images: [{ url_570xN: "https://images.pexels.com/photos/6913471/pexels-photo-6913471.jpeg?auto=compress&cs=tinysrgb&w=570" }],
      url: "https://etsy.com/listing/2",
      tags: ["cotton", "autumn", "quilting"],
      materials: ["cotton"],
      creation_timestamp: Date.now() - 86400000
    },
    {
      listing_id: 3,
      title: "Batik Fabric Strips - Ocean Blue Jelly Roll",
      price: "32.00",
      currency_code: "USD",
      quantity: 3,
      images: [{ url_570xN: "https://images.pexels.com/photos/6913523/pexels-photo-6913523.jpeg?auto=compress&cs=tinysrgb&w=570" }],
      url: "https://etsy.com/listing/3",
      tags: ["batik", "blue", "strips"],
      materials: ["cotton"],
      creation_timestamp: Date.now() - 172800000
    },
    {
      listing_id: 4,
      title: "Christmas Holiday Fabric Pack - Red & Green",
      price: "28.75",
      currency_code: "USD",
      quantity: 12,
      images: [{ url_570xN: "https://images.pexels.com/photos/6913449/pexels-photo-6913449.jpeg?auto=compress&cs=tinysrgb&w=570" }],
      url: "https://etsy.com/listing/4",
      tags: ["christmas", "holiday", "red", "green"],
      materials: ["cotton"],
      creation_timestamp: Date.now() - 259200000
    },
    {
      listing_id: 5,
      title: "Solids Collection - Warm Earth Tones Bundle",
      price: "21.99",
      currency_code: "USD",
      quantity: 20,
      images: [{ url_570xN: "https://images.pexels.com/photos/6913457/pexels-photo-6913457.jpeg?auto=compress&cs=tinysrgb&w=570" }],
      url: "https://etsy.com/listing/5",
      tags: ["solids", "earth", "warm"],
      materials: ["cotton"],
      creation_timestamp: Date.now() - 345600000
    },
    {
      listing_id: 6,
      title: "Geometric Modern Fabric - Black & White Collection",
      price: "26.50",
      currency_code: "USD",
      quantity: 7,
      images: [{ url_570xN: "https://images.pexels.com/photos/6913452/pexels-photo-6913452.jpeg?auto=compress&cs=tinysrgb&w=570" }],
      url: "https://etsy.com/listing/6",
      tags: ["geometric", "modern", "black", "white"],
      materials: ["cotton"],
      creation_timestamp: Date.now() - 432000000
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchListings = async () => {
      try {
        setLoading(true);
        // In a real implementation, you would call the Etsy API here
        // const response = await fetch('/api/etsy/listings');
        // const data = await response.json();
        
        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, 1000));
        setListings(mockListings);
        setError(null);
      } catch (err) {
        setError('Failed to load fabric listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const categories = ['all', 'cotton', 'batik', 'solids', 'floral', 'geometric', 'holiday'];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           listing.tags.some(tag => tag.toLowerCase().includes(selectedCategory.toLowerCase()));
    
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-coral-600"></div>
            <p className="mt-4 text-xl font-open-sans text-warm-brown-600">Loading beautiful fabrics...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-xl font-open-sans text-red-600">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 fabric-button bg-coral-600 text-white px-6 py-2 rounded-lg font-open-sans font-semibold hover:bg-coral-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-playfair font-bold text-warm-brown-800 mb-6">
            Fabric Catalog
          </h1>
          <p className="text-xl font-open-sans text-warm-brown-600 max-w-3xl mx-auto">
            Discover our carefully curated collection of premium fabrics, 
            sourced from talented artisans and updated regularly with fresh arrivals.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-brown-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search fabrics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-warm-brown-200 rounded-lg focus:border-coral-600 focus:outline-none font-open-sans stitched-border"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-open-sans font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-coral-600 text-white stitched-border'
                    : 'bg-warm-brown-100 text-warm-brown-700 hover:bg-warm-brown-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Fabric Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map(listing => (
            <div key={listing.listing_id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow stitched-border">
              <div className="relative">
                <img 
                  src={listing.images[0]?.url_570xN} 
                  alt={listing.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="w-5 h-5 text-coral-600 hover:fill-current cursor-pointer transition-all" />
                </div>
                {listing.quantity <= 5 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-open-sans font-medium">
                    Only {listing.quantity} left!
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-playfair font-semibold text-warm-brown-800 mb-2 line-clamp-2">
                  {listing.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-warm-brown-100 text-warm-brown-600 px-2 py-1 rounded-full text-xs font-open-sans">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-playfair font-bold text-coral-600">
                    ${listing.price}
                  </div>
                  <div className="text-sm font-open-sans text-warm-brown-600">
                    {listing.quantity} in stock
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 fabric-button bg-coral-600 text-white py-3 rounded-lg font-open-sans font-semibold hover:bg-coral-700 transition-all flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <a 
                    href={listing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fabric-button-outline border-2 border-warm-brown-600 text-warm-brown-600 px-4 py-3 rounded-lg hover:bg-warm-brown-600 hover:text-white transition-all flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl font-open-sans text-warm-brown-600">
              No fabrics found matching your search. Try adjusting your filters.
            </p>
          </div>
        )}

        {/* Etsy Integration Note */}
        <div className="mt-16 bg-warm-brown-50 rounded-xl p-8 stitched-border">
          <div className="text-center">
            <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-4">
              Shop More on Etsy
            </h3>
            <p className="font-open-sans text-warm-brown-600 mb-6">
              Visit our Etsy store for our complete collection and to purchase directly.
            </p>
            <a 
              href="https://etsy.com/shop/goldiebees" 
              target="_blank"
              rel="noopener noreferrer"
              className="fabric-button bg-coral-600 text-white px-8 py-4 rounded-lg font-open-sans font-semibold hover:bg-coral-700 transition-all inline-flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Our Etsy Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricCatalog;