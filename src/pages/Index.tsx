
import AuthForm from "@/components/AuthForm";
import Navbar from "@/components/Navbar";

const Index = () => {
  const isAuthenticated = false; // TODO: Implement auth state

  if (!isAuthenticated) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Welcome to GreenFuture IMS</h1>
          {/* TODO: Add dashboard content */}
        </div>
      </main>
    </div>
  );
};

export default Index;
