
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ideasApi } from "@/services/api";
import { toast } from "sonner";
import AuthForm from "@/components/AuthForm";
import Navbar from "@/components/Navbar";
import IdeaCard from "@/components/IdeaCard";
import IdeaSubmissionForm from "@/components/IdeaSubmissionForm";

interface Idea {
  id: number;
  title: string;
  description: string;
  author: string;
  votes: number;
  comments: number;
  createdAt: string;
}

const Index = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: ideas = [], isLoading } = useQuery({
    queryKey: ['ideas'],
    queryFn: ideasApi.getIdeas,
  });

  const voteMutation = useMutation({
    mutationFn: ({ ideaId, type }: { ideaId: number; type: 'up' | 'down' }) =>
      ideasApi.voteIdea(ideaId, type),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ideas'] });
    },
    onError: () => {
      toast.error("Failed to register vote. Please try again.");
    },
  });

  const handleVote = (ideaId: number, type: 'up' | 'down') => {
    voteMutation.mutate({ ideaId, type });
  };

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <IdeaSubmissionForm />
            </div>
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-2xl font-bold mb-6">Latest Ideas</h1>
              {isLoading ? (
                <div className="text-center">Loading ideas...</div>
              ) : (
                ideas.map((idea: Idea) => (
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
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
