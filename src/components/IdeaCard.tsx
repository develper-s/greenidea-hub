
import { ArrowUpIcon, ArrowDownIcon, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

interface IdeaCardProps {
  title: string;
  description: string;
  author: string;
  votes: number;
  comments: number;
  createdAt: string;
  onVote: (type: 'up' | 'down') => void;
}

const IdeaCard = ({
  title,
  description,
  author,
  votes,
  comments,
  createdAt,
  onVote
}: IdeaCardProps) => {
  return (
    <Card className="card-hover glass">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">
              by {author} • {createdAt}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-green-600 hover:text-green-700"
              onClick={() => onVote('up')}
            >
              <ArrowUpIcon className="h-5 w-5" />
            </Button>
            <span className="text-sm font-medium">{votes}</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700"
              onClick={() => onVote('down')}
            >
              <ArrowDownIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <MessageSquare className="h-4 w-4 mr-2" />
          {comments} Comments
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;
