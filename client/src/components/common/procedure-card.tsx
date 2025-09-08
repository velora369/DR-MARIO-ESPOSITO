import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Procedure } from "@/lib/procedures-data";

interface ProcedureCardProps {
  procedure: Procedure;
  onViewDetails: () => void;
}

const ProcedureCard = ({ procedure, onViewDetails }: ProcedureCardProps) => {

  return (
    <Card 
      className="procedure-card bg-card shadow-lg h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group"
      onClick={onViewDetails}
      data-testid={`card-procedure-${procedure.id}`}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold text-dark-teal mb-3 transition-colors duration-300 group-hover:text-vibrant-turquoise">{procedure.name}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
          {procedure.description}
        </p>
        <Button 
          className="bg-vibrant-turquoise hover:bg-soft-blue-green text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 group-hover:shadow-md mt-auto"
          data-testid={`button-details-${procedure.id}`}
        >
          Ver detalhes <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProcedureCard;
