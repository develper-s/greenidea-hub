
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { LucideLeaf } from "lucide-react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 glass animate-in">
        <div className="flex flex-col items-center mb-8">
          <LucideLeaf className="w-12 h-12 text-primary mb-4" />
          <h1 className="text-2xl font-semibold">Welcome to GreenFuture</h1>
          <p className="text-muted-foreground mt-2">Innovation Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-ring"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-ring"
            />
          </div>
          <Button type="submit" className="w-full">
            {isLogin ? "Sign In" : "Register"}
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 text-primary hover:underline"
          >
            {isLogin ? "Register" : "Sign In"}
          </button>
        </p>
      </Card>
    </div>
  );
};

export default AuthForm;
