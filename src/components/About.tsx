import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-warm-brown-800 mb-6">
            Our Story
          </h1>
          <p className="text-xl font-open-sans text-warm-brown-600 max-w-3xl mx-auto">
            Three generations of quilters, one shared passion for preserving 
            the beautiful art of quilting in our community.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-playfair font-bold text-warm-brown-800 mb-6">
              Founded with Love in 1985
            </h2>
            <div className="space-y-4 font-open-sans text-warm-brown-600">
              <p>
                What started as a small dream in Margaret Thompson's living room has 
                grown into the heart of our quilting community. Margaret, a third-generation 
                quilter, wanted to create a space where the timeless art of quilting 
                could be shared, celebrated, and passed down to future generations.
              </p>
              <p>
                Today, her daughter Sarah and granddaughter Emma continue the tradition, 
                bringing fresh perspectives while honoring the classic techniques that 
                make each quilt a masterpiece.
              </p>
              <p>
                We believe that every quilt tells a story – of family gatherings, 
                late-night conversations, and the patient love that goes into every stitch. 
                Our mission is to help you create your own beautiful stories, one quilt at a time.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="stitched-border-thick rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Our quilting family" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "35+", label: "Years of Service", icon: <Clock className="w-6 h-6" /> },
            { number: "500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
            { number: "1,200+", label: "Quilts Created", icon: <Heart className="w-6 h-6" /> },
            { number: "50+", label: "Awards Won", icon: <Award className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-coral-600 rounded-full flex items-center justify-center mx-auto mb-4 stitched-border">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-playfair font-bold text-warm-brown-800 mb-2">
                {stat.number}
              </h3>
              <p className="font-open-sans text-warm-brown-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-warm-brown-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Margaret Thompson",
                role: "Founder & Master Quilter",
                image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "With over 50 years of quilting experience, Margaret's passion for the craft shines through in every piece she creates."
              },
              {
                name: "Sarah Johnson",
                role: "Shop Manager & Instructor",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Sarah brings modern techniques to traditional quilting, helping bridge the gap between classic and contemporary styles."
              },
              {
                name: "Emma Wilson",
                role: "Design Specialist",
                image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Emma's fresh perspective and digital design skills help customers visualize their quilting projects before they begin."
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto stitched-border-thick rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-coral-600 font-open-sans font-medium mb-4">
                  {member.role}
                </p>
                <p className="font-open-sans text-warm-brown-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-warm-brown-50 rounded-2xl p-12 stitched-border">
          <h2 className="text-3xl font-playfair font-bold text-warm-brown-800 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-4">
                Quality First
              </h3>
              <p className="font-open-sans text-warm-brown-600">
                We believe in using only the finest materials and time-tested techniques 
                to ensure every quilt stands the test of time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-4">
                Community Focus
              </h3>
              <p className="font-open-sans text-warm-brown-600">
                Quilting is better when shared. We foster a welcoming environment 
                where beginners and experts learn from each other.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-4">
                Tradition & Innovation
              </h3>
              <p className="font-open-sans text-warm-brown-600">
                We honor traditional quilting methods while embracing new techniques 
                and tools that make quilting more accessible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-4">
                Personal Touch
              </h3>
              <p className="font-open-sans text-warm-brown-600">
                Every customer is family. We take the time to understand your vision 
                and help you bring it to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;