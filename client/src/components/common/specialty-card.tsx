import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SpecialtyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  onLearnMore: () => void;
  testId?: string;
}

const SpecialtyCard = ({ 
  title, 
  description, 
  icon, 
  bgColor, 
  onLearnMore,
  testId 
}: SpecialtyCardProps) => {
  return (
    <Card className="specialty-card bg-white shadow-lg text-center h-full" data-testid={testId}>
      <CardContent className="p-8">
        <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-dark-teal mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Button 
          variant="ghost" 
          className="text-primary hover:text-accent font-semibold p-0"
          onClick={onLearnMore}
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default SpecialtyCard;
