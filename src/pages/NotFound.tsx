import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist.
        </p>
        <Button onClick={() => navigate("/")}>
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound; 