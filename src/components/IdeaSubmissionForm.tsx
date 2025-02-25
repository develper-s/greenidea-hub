
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";
import { ideasApi } from "@/services/api";
import { toast } from "sonner";

const IdeaSubmissionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await ideasApi.createIdea(title, description);
      toast.success("Idea submitted successfully!");
      setTitle("");
      setDescription("");
    } catch (error) {
      toast.error("Failed to submit idea. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="glass">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <LightbulbIcon className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Submit Your Idea</h2>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Idea Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-ring"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <textarea
              placeholder="Describe your idea..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background input-ring resize-none"
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Idea"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IdeaSubmissionForm;
