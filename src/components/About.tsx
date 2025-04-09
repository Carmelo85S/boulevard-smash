import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-bistro-cream">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h4 className="text-bistro-orange font-cursive text-2xl mb-2">Our Story</h4>
            <h2 className="text-4xl font-bold text-bistro-darkBrown mb-8">
              From Passion to Plate: The Boulevard Smash Story
            </h2>
            <p className="text-lg text-bistro-darkBrown/90 leading-relaxed mb-8">
              Founded in 2015 by Chef Marcus Laurent, Boulevard Smash began with a simple mission: to elevate the humble burger into a gourmet culinary experience without losing its comforting, classic appeal.
            </p>
            <p className="text-bistro-darkBrown/90 mb-6">
              We partner with local farmers to source the freshest ingredients, grind our beef daily, and bake our buns in-house. Every sauce and garnish is crafted with care in our kitchen, ensuring that each bite delivers exceptional flavor.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-bistro-red mb-1">7+</h3>
                <p className="text-bistro-darkBrown/90 text-sm">Years of Excellence</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-bistro-red mb-1">100%</h3>
                <p className="text-bistro-darkBrown/90 text-sm">Locally Sourced</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-bistro-red mb-1">15+</h3>
                <p className="text-bistro-darkBrown/90 text-sm">Unique Burgers</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <h3 className="text-3xl font-bold text-bistro-red mb-1">3</h3>
                <p className="text-bistro-darkBrown/90 text-sm">Local Awards</p>
              </div>
            </div>
            <Link to="/contact">
              <Button className="bg-bistro-red hover:bg-bistro-darkBrown">
                <Calendar className="mr-2" size={18} /> Book Now
              </Button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Chef preparing a gourmet burger"
                className="rounded-lg shadow-lg h-auto max-w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="Fresh ingredients for our burgers"
                className="rounded-lg shadow-lg h-auto max-w-full mt-4"
              />
            </div>
            <div className="pt-10">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
                alt="Bistro Burger restaurant interior"
                className="rounded-lg shadow-lg h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
