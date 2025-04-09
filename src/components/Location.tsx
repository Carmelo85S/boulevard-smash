
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-bistro-beige relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584270692201-9b6b56184d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80')",
        }}
      />
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-bistro-darkBrown mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-bistro-brown/80 max-w-2xl mx-auto">
            Join us for a memorable dining experience at our centrally-located bistro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-bistro-darkBrown mb-6">Our Location</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-bistro-red mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-bistro-darkBrown">Address</h4>
                  <p className="text-bistro-brown">
                    123 Gourmet Avenue<br />
                    Downtown Culinary District<br />
                    Foodie City, FC 12345
                  </p>
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
            </div>
          </div>
          
          <div className="h-80 md:h-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1650000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
