import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bistro-darkBrown mb-6">
              Get in Touch
            </h2>
            <p className="text-bistro-brown mb-8">
              Have a question or want to make a reservation? Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-bistro-darkBrown mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bistro-darkBrown mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-bistro-darkBrown mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-bistro-darkBrown mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button className="bg-bistro-red hover:bg-bistro-red/90 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="bg-bistro-cream p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-bistro-darkBrown mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-bistro-red mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-bistro-darkBrown">Phone</h4>
                  <p className="text-bistro-brown">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-bistro-red mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-bistro-darkBrown">Email</h4>
                  <p className="text-bistro-brown">info@bistroburger.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-bistro-red mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-bistro-darkBrown">Hours</h4>
                  <p className="text-bistro-brown">
                    Monday - Thursday: 11am - 10pm<br />
                    Friday - Saturday: 11am - 11pm<br />
                    Sunday: 12pm - 9pm
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Calendar className="text-bistro-red mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-bistro-darkBrown">Reservations</h4>
                  <p className="text-bistro-brown">
                    For reservations, please call us or use the contact form above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 