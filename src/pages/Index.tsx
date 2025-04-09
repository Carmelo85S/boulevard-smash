import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Boulevard Smash</h1>
          <p className="text-xl text-muted-foreground">
            The best burgers in town
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Menu</CardTitle>
              <CardDescription>Discover our delicious burgers</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" className="w-full">
                View Menu
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Book a Table</CardTitle>
              <CardDescription>Reserve your spot</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" className="w-full">
                Make Reservation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Get in touch</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" className="w-full">
                Contact
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index; 