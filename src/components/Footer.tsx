import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bistro-darkBrown text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-cursive text-bistro-red">Boulevard Smash</h3>
            <p className="text-bistro-beige/80 leading-relaxed">
              Hand-crafted burgers using fresh, locally-sourced ingredients. Experience
              a taste sensation that redefines your burger expectations.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-bistro-beige/80 hover:text-bistro-red transition-colors transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-bistro-beige/80 hover:text-bistro-red transition-colors transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-bistro-beige/80 hover:text-bistro-red transition-colors transform hover:scale-110">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-bistro-beige/80 hover:text-bistro-red transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-bistro-red rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-bistro-beige/80 hover:text-bistro-red transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-bistro-red rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-bistro-beige/80 hover:text-bistro-red transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-bistro-red rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#location" className="text-bistro-beige/80 hover:text-bistro-red transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-bistro-red rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-bistro-beige/80 hover:text-bistro-red transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-bistro-red rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-bistro-red">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-bistro-red" />
                <span>Drottninggatan 45, 111 51 Stockholm, Sweden</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-bistro-red" />
                <span>+46 8 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-bistro-red" />
                <span>info@bistroboulevard.se</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Opening Hours</h4>
            <ul className="space-y-4 text-bistro-beige/80">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11am - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12pm - 9pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bistro-beige/10 mt-16 pt-8 text-center text-bistro-beige/60">
          <p>&copy; {new Date().getFullYear()} Boulevard Smash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
