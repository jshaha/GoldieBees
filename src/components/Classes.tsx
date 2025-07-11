import React, { useState } from 'react';
import { Calendar, Clock, Users, Star, MapPin, Heart } from 'lucide-react';

interface ClassEvent {
  id: number;
  title: string;
  description: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  maxStudents: number;
  currentStudents: number;
  price: number;
  image: string;
  materials: string[];
}

const Classes: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const classes: ClassEvent[] = [
    {
      id: 1,
      title: "Beginner's First Quilt",
      description: "Learn the fundamentals of quilting in this hands-on workshop. Perfect for complete beginners who want to create their first beautiful quilt.",
      instructor: "Margaret Thompson",
      date: "2024-01-15",
      time: "10:00 AM",
      duration: "4 hours",
      level: "Beginner",
      maxStudents: 8,
      currentStudents: 5,
      price: 85,
      image: "https://images.pexels.com/photos/6913464/pexels-photo-6913464.jpeg?auto=compress&cs=tinysrgb&w=400",
      materials: ["Fabric bundle", "Batting", "Thread", "Basic tools"]
    },
    {
      id: 2,
      title: "Advanced Appliqué Techniques",
      description: "Master the art of appliqué with advanced techniques including needle-turn appliqué, raw edge appliqué, and dimensional appliqué.",
      instructor: "Sarah Johnson",
      date: "2024-01-18",
      time: "1:00 PM",
      duration: "6 hours",
      level: "Advanced",
      maxStudents: 6,
      currentStudents: 4,
      price: 120,
      image: "https://images.pexels.com/photos/6913449/pexels-photo-6913449.jpeg?auto=compress&cs=tinysrgb&w=400",
      materials: ["Specialty fabrics", "Appliqué threads", "Templates", "Needles"]
    },
    {
      id: 3,
      title: "Paper Piecing Workshop",
      description: "Discover the precision of paper piecing and create intricate geometric designs that would be impossible with traditional piecing.",
      instructor: "Emma Wilson",
      date: "2024-01-20",
      time: "9:00 AM",
      duration: "5 hours",
      level: "Intermediate",
      maxStudents: 10,
      currentStudents: 7,
      price: 95,
      image: "https://images.pexels.com/photos/6913471/pexels-photo-6913471.jpeg?auto=compress&cs=tinysrgb&w=400",
      materials: ["Paper templates", "Fabric scraps", "Glue stick", "Tweezers"]
    },
    {
      id: 4,
      title: "Quilting Bee Social",
      description: "Join our monthly quilting bee for a fun, social quilting experience. Bring your current project and enjoy good company!",
      instructor: "Community Event",
      date: "2024-01-25",
      time: "6:00 PM",
      duration: "3 hours",
      level: "Beginner",
      maxStudents: 15,
      currentStudents: 12,
      price: 25,
      image: "https://images.pexels.com/photos/6913457/pexels-photo-6913457.jpeg?auto=compress&cs=tinysrgb&w=400",
      materials: ["Bring your own project", "Snacks provided"]
    },
    {
      id: 5,
      title: "Modern Quilting Techniques",
      description: "Explore contemporary quilting styles with bold colors, improvisational piecing, and modern aesthetic principles.",
      instructor: "Emma Wilson",
      date: "2024-01-27",
      time: "11:00 AM",
      duration: "4 hours",
      level: "Intermediate",
      maxStudents: 8,
      currentStudents: 3,
      price: 100,
      image: "https://images.pexels.com/photos/6913452/pexels-photo-6913452.jpeg?auto=compress&cs=tinysrgb&w=400",
      materials: ["Modern fabric selection", "Rotary cutter", "Rulers", "Design wall"]
    },
    {
      id: 6,
      title: "Hand Quilting Mastery",
      description: "Learn traditional hand quilting techniques and create beautiful, heirloom-quality quilts using time-honored methods.",
      instructor: "Margaret Thompson",
      date: "2024-01-30",
      time: "2:00 PM",
      duration: "3 hours",
      level: "Advanced",
      maxStudents: 6,
      currentStudents: 2,
      price: 110,
      image: "https://images.pexels.com/photos/6913523/pexels-photo-6913523.jpeg?auto=compress&cs=tinysrgb&w=400",
      materials: ["Hand quilting thread", "Quilting needles", "Hoop", "Thimble"]
    }
  ];

  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredClasses = classes.filter(classItem => 
    selectedLevel === 'all' || classItem.level === selectedLevel
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-playfair font-bold text-warm-brown-800 mb-6">
            Classes & Events
          </h1>
          <p className="text-xl font-open-sans text-warm-brown-600 max-w-3xl mx-auto">
            Join our quilting community and learn from experienced instructors in a 
            warm, welcoming environment. All skill levels welcome!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-6 py-3 rounded-full font-open-sans font-medium transition-all ${
                selectedLevel === level
                  ? 'bg-coral-600 text-white stitched-border'
                  : 'bg-warm-brown-100 text-warm-brown-700 hover:bg-warm-brown-200'
              }`}
            >
              {level === 'all' ? 'All Levels' : level}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredClasses.map(classItem => (
            <div key={classItem.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all stitched-border">
              <div className="relative">
                <img 
                  src={classItem.image} 
                  alt={classItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-open-sans font-medium ${getLevelColor(classItem.level)}`}>
                    {classItem.level}
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="w-5 h-5 text-coral-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-warm-brown-800 mb-2">
                  {classItem.title}
                </h3>
                
                <p className="font-open-sans text-warm-brown-600 mb-4 text-sm line-clamp-3">
                  {classItem.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm font-open-sans text-warm-brown-600">
                    <Calendar className="w-4 h-4 text-coral-600" />
                    {formatDate(classItem.date)}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-open-sans text-warm-brown-600">
                    <Clock className="w-4 h-4 text-coral-600" />
                    {classItem.time} • {classItem.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-open-sans text-warm-brown-600">
                    <Users className="w-4 h-4 text-coral-600" />
                    {classItem.currentStudents}/{classItem.maxStudents} students
                  </div>
                  <div className="flex items-center gap-2 text-sm font-open-sans text-warm-brown-600">
                    <Star className="w-4 h-4 text-coral-600" />
                    {classItem.instructor}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-playfair font-bold text-coral-600">
                    ${classItem.price}
                  </div>
                  <div className="text-sm font-open-sans text-warm-brown-600">
                    {classItem.maxStudents - classItem.currentStudents} spots left
                  </div>
                </div>

                <button 
                  className={`w-full py-3 rounded-lg font-open-sans font-semibold transition-all ${
                    classItem.currentStudents >= classItem.maxStudents
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'fabric-button bg-coral-600 text-white hover:bg-coral-700'
                  }`}
                  disabled={classItem.currentStudents >= classItem.maxStudents}
                >
                  {classItem.currentStudents >= classItem.maxStudents ? 'Class Full' : 'Register Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-warm-brown-50 rounded-xl p-8 stitched-border">
            <h3 className="text-2xl font-playfair font-bold text-warm-brown-800 mb-4">
              Class Information
            </h3>
            <div className="space-y-4 font-open-sans text-warm-brown-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral-600 mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm">1030 First Ave., Gibbon, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-coral-600 mt-1" />
                <div>
                  <p className="font-semibold">Registration</p>
                  <p className="text-sm">Register at least 48 hours before class</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-coral-600 mt-1" />
                <div>
                  <p className="font-semibold">Cancellation Policy</p>
                  <p className="text-sm">Full refund if cancelled 24 hours before class</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-coral-50 rounded-xl p-8 stitched-border">
            <h3 className="text-2xl font-playfair font-bold text-warm-brown-800 mb-4">
              What to Bring
            </h3>
            <div className="font-open-sans text-warm-brown-600">
              <p className="mb-4">All classes include:</p>
              <ul className="space-y-2 text-sm">
                <li>• Basic sewing supplies</li>
                <li>• Light refreshments</li>
                <li>• Take-home pattern</li>
                <li>• Personal instruction</li>
              </ul>
              <p className="mt-4 text-sm">
                Specific material lists will be provided upon registration. 
                We also offer material packages for purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;