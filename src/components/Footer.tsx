import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif mb-4">Rajputi Textiles</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover the beauty of traditional Rajasthani clothing with our exquisite collection of poshaks, 
              suits and odhni. Each piece is crafted with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pure Poshak</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Semi Pure Poshak</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Half Pure Poshak</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Satan Suit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cotton suit</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">+91 7231088201</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">sarojhada90@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="text-gray-300">Lakheri , Bundi , Rajasthan</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Rajputi Textiles by Bhanwar Singh & Saroj Kanwar . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;