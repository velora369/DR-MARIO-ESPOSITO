import { ArrowRight } from "lucide-react";
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
    // Since we can't dynamically import Lucide icons, we'll use a simple mapping
    const iconMap: Record<string, string> = {
      nose: "👃",
      lungs: "🫁", 
      moon: "🌙",
      eye: "👁️",
      smile: "😊",
      ear: "👂",
      zap: "⚡",
      droplet: "💧",
      minus: "➖",
      "test-tube": "🧪",
      shield: "🛡️",
      wind: "💨"
    };

    return iconMap[procedure.icon] || "🔬";
  };

  return (
    <Card 
      className="procedure-card bg-white shadow-lg h-full cursor-pointer"
      onClick={onViewDetails}
      data-testid={`card-procedure-${procedure.id}`}
    >
      <CardContent className="p-6">
        <div className={`w-14 h-14 ${getIconBgColor()} rounded-lg flex items-center justify-center mb-4`}>
          <span className="text-2xl">{getIcon()}</span>
        </div>
        <h3 className="text-xl font-bold text-dark-teal mb-3">{procedure.name}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {procedure.description}
        </p>
        <Button 
          variant="ghost" 
          className="text-primary hover:text-accent font-semibold p-0"
          data-testid={`button-details-${procedure.id}`}
        >
          Ver detalhes <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProcedureCard;
