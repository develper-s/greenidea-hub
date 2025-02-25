
import { useState } from "react";
import AuthForm from "@/components/AuthForm";
import Navbar from "@/components/Navbar";
import IdeaCard from "@/components/IdeaCard";
import IdeaSubmissionForm from "@/components/IdeaSubmissionForm";

// Mock data for demonstration
const mockIdeas = [
  {
    id: 1,
    title: "Solar-Powered Office Equipment",
    description: "Implement solar-powered charging stations for all office equipment to reduce energy consumption and promote sustainable practices.",
    author: "Sarah Chen",
    votes: 15,
    comments: 3,
    createdAt: "2 days ago"
  },
  {
    id: 2,
    title: "Green Waste Management System",
    description: "Develop an AI-powered waste sorting system to optimize recycling and composting in our office spaces.",
    author: "Michael Rodriguez",
    votes: 12,
    comments: 5,
    createdAt: "3 days ago"
  }
];

const Index = () => {
  const isAuthenticated = false; // TODO: Implement auth state
  const [ideas, setIdeas] = useState(mockIdeas);

  const handleVote = (ideaId: number, type: 'up' | 'down') => {
    setIdeas(prevIdeas =>
      prevIdeas.map(idea =>
        idea.id === ideaId
          ? { ...idea, votes: idea.votes + (type === 'up' ? 1 : -1) }
          : idea
      )
    );
  };

  if (!isAuthenticated) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left sidebar - can be used for filters or categories later */}
            <div className="md:col-span-1">
              <IdeaSubmissionForm />
            </div>

            {/* Main content - Ideas list */}
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-2xl font-bold mb-6">Latest Ideas</h1>
              {ideas.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  title={idea.title}
                  description={idea.description}
                  author={idea.author}
                  votes={idea.votes}
                  comments={idea.comments}
                  createdAt={idea.createdAt}
                  onVote={(type) => handleVote(idea.id, type)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
