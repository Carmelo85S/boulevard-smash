import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-bistro-darkBrown/90 to-bistro-darkBrown/70 mix-blend-multiply z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundBlendMode: "overlay",
            zIndex: -1,
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h4 className="text-bistro-orange font-cursive text-2xl mb-2 animate-fade-in">
            Savor Every Bite
          </h4>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Gourmet Burgers Made With Passion
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Hand-crafted burgers using fresh, locally-sourced ingredients. Experience
            a taste sensation that redefines your burger expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-bistro-red hover:bg-bistro-red/90 text-white" onClick={scrollToMenu}>
              View Menu
            </Button>
            <Button 
              size="lg" 
              className="bg-bistro-orange hover:bg-bistro-orange/90 text-white" 
              onClick={scrollToContact}
            >
              Book a Table <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce opacity-70">
        <ChevronRight size={30} className="text-white rotate-90" />
      </div>
    </section>
  );
};

export default Hero;
