import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen || isScrolled
          ? "bg-bistro-darkBrown/95 backdrop-blur-sm bistro-shadow py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-3xl font-cursive text-bistro-red hover:text-bistro-red/90 transition-colors">
          Boulevard Smash
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`font-medium transition-colors ${
              isMenuOpen || isScrolled ? "text-white hover:text-bistro-red" : "text-red hover:text-bistro-red"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className={`font-medium transition-colors ${
              isMenuOpen || isScrolled ? "text-white hover:text-bistro-red" : "text-red hover:text-bistro-red"
            }`}
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`font-medium transition-colors ${
              isMenuOpen || isScrolled ? "text-white hover:text-bistro-red" : "text-red hover:text-bistro-red"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className={`font-medium transition-colors ${
              isMenuOpen || isScrolled ? "text-white hover:text-bistro-red" : "text-red hover:text-bistro-red"
            }`}
          >
            Location
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`font-medium transition-colors flex items-center ${
              isMenuOpen || isScrolled ? "text-white hover:text-bistro-red" : "text-white hover:text-bistro-red"
            }`}
          >
            <Calendar className="mr-1" size={16} /> Book Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden ${
            isMenuOpen || isScrolled ? "text-white hover:text-bistro-red" : "text-white hover:text-bistro-red"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in py-4 bg-bistro-darkBrown/95 backdrop-blur-sm">
          <nav className="container flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="px-4 py-2 font-medium text-white hover:text-bistro-red rounded-md transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="px-4 py-2 font-medium text-white hover:text-bistro-red rounded-md transition-colors text-left"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 font-medium text-white hover:text-bistro-red rounded-md transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="px-4 py-2 font-medium text-white hover:text-bistro-red rounded-md transition-colors text-left"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 font-medium text-white hover:text-bistro-red rounded-md transition-colors text-left flex items-center"
            >
              <Calendar className="mr-2" size={16} /> Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
