import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheddar, lettuce, tomato, and our special sauce",
    price: "149 Kr",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=722&q=80",
    category: "Burgers",
    featured: true,
  },
  {
    id: 2,
    name: "BBQ Bacon Burger",
    description: "Grilled beef patty with crispy bacon, BBQ sauce, and caramelized onions",
    price: "179 Kr",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1599&q=80",
    category: "Burgers",
    featured: true,
  },
  {
    id: 3,
    name: "Mushroom Swiss Burger",
    description: "Beef patty topped with sautéed mushrooms and Swiss cheese",
    price: "169 Kr",
    image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    category: "Burgers",
    featured: true,
  },
  {
    id: 4,
    name: "Veggie Burger",
    description: "House-made veggie patty with fresh vegetables and vegan mayo",
    price: "159 Kr",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "Vegetarian",
    featured: true,
  },
  {
    id: 5,
    name: "Double Stack Burger",
    description: "Two beef patties with double cheese, special sauce, and pickles",
    price: "199 Kr",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Burgers",
    featured: true,
  },
  {
    id: 6,
    name: "Spicy Jalapeño Burger",
    description: "Beef patty with jalapeños, pepper jack cheese, and spicy mayo",
    price: "169 Kr",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    category: "Burgers",
    featured: true,
  },
  {
    id: 7,
    name: "Truffle Burger",
    description: "Premium beef patty with truffle aioli and wild mushrooms",
    price: "189 Kr",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Burgers",
    featured: true,
  },
  {
    id: 8,
    name: "Kids Burger",
    description: "Smaller portion with a side of fries",
    price: "99 Kr",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Burgers",
    featured: true,
  },
];

const Menu = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="menu" className="py-20 bg-bistro-cream">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bistro-darkBrown mb-4">
            Our Featured Menu
          </h2>
          <p className="text-lg text-bistro-brown/80 max-w-2xl mx-auto">
            Discover our chef's selection of premium burgers and sides, crafted with locally-sourced ingredients
            and prepared to perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden border-0 bistro-shadow menu-item-hover">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 h-48 md:h-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-bistro-darkBrown mb-2">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-bistro-red whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-bistro-brown/80 mb-4 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-bistro-brown hover:bg-bistro-darkBrown"
            onClick={scrollToContact}
          >
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
