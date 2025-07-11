import React from 'react';
import { ExternalLink, Heart, ShoppingBag } from 'lucide-react';

const FabricCatalog: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-warm-brown-800 mb-6">
            Welcome to Our Etsy Shop
          </h1>
          <p className="text-xl font-open-sans text-warm-brown-600 max-w-3xl mx-auto">
            Discover our carefully curated collection of premium fabrics and quilting supplies 
            in our Etsy shop. We're constantly adding new arrivals and unique finds!
          </p>
        </div>

        {/* Etsy Shop Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-warm-brown-50 to-coral-50 rounded-2xl p-12 stitched-border">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-coral-600 rounded-full flex items-center justify-center mx-auto mb-6 stitched-border">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-playfair font-bold text-warm-brown-800 mb-4">
                Visit GoldieBees on Etsy
              </h2>
              <p className="text-lg font-open-sans text-warm-brown-600 mb-8">
                Browse our complete collection of fabrics, patterns, and quilting supplies. 
                From vintage finds to modern prints, we have everything you need for your next project.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 stitched-border">
                <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-4">
                  What You'll Find
                </h3>
                <ul className="space-y-3 font-open-sans text-warm-brown-600">
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Premium quilting cotton
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Vintage fabric collections
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Fat quarter bundles
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Jelly rolls and charm packs
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Quilting patterns and books
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Sewing supplies and notions
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 stitched-border">
                <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-4">
                  Why Shop With Us
                </h3>
                <ul className="space-y-3 font-open-sans text-warm-brown-600">
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Hand-selected quality fabrics
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Fast shipping and great service
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Unique and hard-to-find prints
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Expert quilting advice
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    New arrivals every week
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-coral-600" />
                    Customer satisfaction guarantee
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://www.etsy.com/shop/GoldieBees?ref=shop-header-name&listing_id=1742029914&from_page=listing"
                target="_blank"
                rel="noopener noreferrer"
                className="fabric-button bg-coral-600 text-white px-8 py-4 rounded-lg font-open-sans font-semibold hover:bg-coral-700 transition-all inline-flex items-center gap-3 text-lg"
              >
                <ExternalLink className="w-6 h-6" />
                Visit Our Etsy Shop
              </a>
              <p className="mt-4 text-sm font-open-sans text-warm-brown-600">
                Opens in a new tab • Secure checkout through Etsy
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-warm-brown-50 rounded-xl p-8 stitched-border">
            <h3 className="text-2xl font-playfair font-bold text-warm-brown-800 mb-6 text-center">
              Need Help Finding Something?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-playfair font-semibold text-warm-brown-800 mb-2">
                  Contact Us
                </h4>
                <p className="font-open-sans text-warm-brown-600 text-sm">
                  Message us on Etsy for custom requests or questions about specific fabrics.
                </p>
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-warm-brown-800 mb-2">
                  Follow Us
                </h4>
                <p className="font-open-sans text-warm-brown-600 text-sm">
                  Get notified about new arrivals and special offers by following our shop.
                </p>
              </div>
              <div>
                <h4 className="font-playfair font-semibold text-warm-brown-800 mb-2">
                  Reviews
                </h4>
                <p className="font-open-sans text-warm-brown-600 text-sm">
                  Read reviews from our happy customers to see what others are saying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricCatalog;