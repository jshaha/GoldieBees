import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-playfair font-bold text-warm-brown-800 mb-6">
            Contact Us
          </h1>
          <p className="text-xl font-open-sans text-warm-brown-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our fabrics, 
            want to join a class, or just want to chat about quilting, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-playfair font-bold text-warm-brown-800 mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral-600 rounded-full flex items-center justify-center stitched-border">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-warm-brown-800 mb-2">Visit Our Store</h3>
                  <p className="font-open-sans text-warm-brown-600">
                    1030 First Ave.<br />
                    Gibbon, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral-600 rounded-full flex items-center justify-center stitched-border">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-warm-brown-800 mb-2">Call Us</h3>
                  <p className="font-open-sans text-warm-brown-600">
                    909-524-8218<br />
                    <span className="text-sm">Owner: Carol Brown</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral-600 rounded-full flex items-center justify-center stitched-border">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-warm-brown-800 mb-2">Email Us</h3>
                  <p className="font-open-sans text-warm-brown-600">
                    cabkent56@gmail.com<br />
                    <span className="text-sm">We reply within 24 hours</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral-600 rounded-full flex items-center justify-center stitched-border">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-semibold text-warm-brown-800 mb-2">Store Hours</h3>
                  <div className="font-open-sans text-warm-brown-600 text-sm">
                    <p>Wednesday: 10 am - 5 pm</p>
                    <p>Thursday: 10 am - 5 pm</p>
                    <p>Friday: 9 am - 5 pm</p>
                    <p>Saturday: 10 am - 2 pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-8 bg-warm-brown-100 rounded-xl p-8 stitched-border">
              <h3 className="font-playfair font-semibold text-warm-brown-800 mb-4">Find Us</h3>
              <div className="bg-warm-brown-200 rounded-lg h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=1030+First+Ave,+Gibbon,+NE"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Goldiebees Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-playfair font-bold text-warm-brown-800 mb-8">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-open-sans font-semibold text-warm-brown-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-warm-brown-200 rounded-lg focus:border-coral-600 focus:outline-none font-open-sans stitched-border"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-open-sans font-semibold text-warm-brown-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-warm-brown-200 rounded-lg focus:border-coral-600 focus:outline-none font-open-sans stitched-border"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-open-sans font-semibold text-warm-brown-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-warm-brown-200 rounded-lg focus:border-coral-600 focus:outline-none font-open-sans stitched-border"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="classes">Classes & Events</option>
                  <option value="fabrics">Fabric Questions</option>
                  <option value="custom">Custom Orders</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-open-sans font-semibold text-warm-brown-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-warm-brown-200 rounded-lg focus:border-coral-600 focus:outline-none font-open-sans stitched-border resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full fabric-button bg-coral-600 text-white py-4 rounded-lg font-open-sans font-semibold hover:bg-coral-700 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 bg-coral-50 rounded-xl p-6 stitched-border">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-coral-600" />
                <h3 className="font-playfair font-semibold text-warm-brown-800">
                  We're Here to Help!
                </h3>
              </div>
              <p className="font-open-sans text-warm-brown-600 text-sm">
                Our friendly team is always ready to assist you with any questions 
                about quilting, fabric selection, or our classes. Don't hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;