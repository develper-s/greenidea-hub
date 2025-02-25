
import { LucideLeaf, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LucideLeaf className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">GreenFuture IMS</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <UserCircle className="w-5 h-5 mr-2" />
            {user?.name || 'Profile'}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground"
            onClick={logout}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
