import { X, MessageCircle, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Procedure } from "@/lib/procedures-data";

interface ProcedureModalProps {
  procedure: Procedure | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProcedureModal = ({ procedure, isOpen, onClose }: ProcedureModalProps) => {
  if (!procedure) return null;

  const whatsappLink = `https://api.whatsapp.com/send?phone=5565996243541&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(procedure.name)}%20e%20agendar%20uma%20consulta`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid={`modal-procedure-${procedure.id}`}>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-dark-teal" data-testid={`title-${procedure.id}`}>
            {procedure.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-dark-teal mb-3">Descrição</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid={`description-${procedure.id}`}>
              {procedure.details.fullDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-dark-teal mb-3">Indicações</h3>
            <ul className="space-y-2" data-testid={`indications-${procedure.id}`}>
              {procedure.details.indications.map((indication, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-vibrant-turquoise" />
                  <span className="text-muted-foreground">{indication}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-dark-teal mb-3">Como é feito</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid={`process-${procedure.id}`}>
              {procedure.details.process}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-dark-teal mb-3">Recuperação</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid={`recovery-${procedure.id}`}>
              {procedure.details.recovery}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-dark-teal mb-3">Riscos</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid={`risks-${procedure.id}`}>
              {procedure.details.risks}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-dark-teal mb-3">Cuidados</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid={`care-${procedure.id}`}>
              {procedure.details.care}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center"
            data-testid={`button-whatsapp-${procedure.id}`}
          >
            <MessageCircle className="mr-3 h-5 w-5" />
            Agendar consulta sobre este procedimento
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProcedureModal;
