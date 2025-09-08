import { ArrowRight, Stethoscope, Scissors, Sparkles, Shield, Brain, Ear, Zap, Droplet, Minus, TestTube, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Procedure } from "@/lib/procedures-data";

interface ProcedureCardProps {
  procedure: Procedure;
  onViewDetails: () => void;
}

const ProcedureCard = ({ procedure, onViewDetails }: ProcedureCardProps) => {
  const getIconBgColor = () => {
    switch (procedure.category) {
      case 'otorrino':
        return 'bg-vibrant-turquoise';
      case 'cirurgia':
        return 'bg-soft-blue-green';
      case 'estetica':
        return 'bg-light-blue-pastel';
      case 'alergia':
        return 'bg-light-bluish-gray';
      default:
        return 'bg-vibrant-turquoise';
    }
  };

  const getIcon = () => {
    // Professional medical flat icons using Lucide
    const iconMap: Record<string, React.ReactNode> = {
      nose: <Stethoscope className="w-6 h-6 text-white" />,
      lungs: <Wind className="w-6 h-6 text-white" />, 
      moon: <Brain className="w-6 h-6 text-white" />,
      eye: <Sparkles className="w-6 h-6 text-white" />,
      smile: <Sparkles className="w-6 h-6 text-white" />,
      ear: <Ear className="w-6 h-6 text-white" />,
      zap: <Zap className="w-6 h-6 text-white" />,
      droplet: <Droplet className="w-6 h-6 text-white" />,
      minus: <Minus className="w-6 h-6 text-white" />,
      "test-tube": <TestTube className="w-6 h-6 text-white" />,
      shield: <Shield className="w-6 h-6 text-white" />,
      wind: <Wind className="w-6 h-6 text-white" />
    };

    return iconMap[procedure.icon] || <Stethoscope className="w-6 h-6 text-white" />;
  };

  return (
    <Card 
      className="procedure-card bg-card shadow-lg h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group"
      onClick={onViewDetails}
      data-testid={`card-procedure-${procedure.id}`}
    >
      <CardContent className="p-6">
        <div className={`w-14 h-14 ${getIconBgColor()} rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-vibrant-turquoise`}>
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-dark-teal mb-3 transition-colors duration-300 group-hover:text-vibrant-turquoise">{procedure.name}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {procedure.description}
        </p>
        <Button 
          variant="ghost" 
          className="text-primary hover:text-vibrant-turquoise font-semibold p-0 transition-all duration-300"
          data-testid={`button-details-${procedure.id}`}
        >
          Ver detalhes <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProcedureCard;
