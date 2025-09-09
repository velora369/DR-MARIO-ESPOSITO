import { useState, useMemo, useEffect } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ProcedureCard from "@/components/common/procedure-card";
import ProcedureModal from "@/components/common/procedure-modal";
import { proceduresData, getCategoryName, type Procedure } from "@/lib/procedures-data";

const Procedures = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProcedures = useMemo(() => {
    return proceduresData.filter((procedure) => {
      const matchesSearch = procedure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           procedure.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || selectedCategory === "todas" || procedure.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleProcedureClick = (procedure: Procedure) => {
    setSelectedProcedure(procedure);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProcedure(null);
  };

  return (
    <div>
      <section className="py-20" data-testid="section-procedures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Botão Voltar no topo */}
          <div className="mb-8">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-muted-foreground hover:text-vibrant-turquoise transition-colors bg-[#23252f00]"
                data-testid="button-back-top"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Button>
            </Link>
          </div>
          
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-procedures">
              Procedimentos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-procedures">
              Conheça todos os tratamentos disponíveis com descrições detalhadas
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar procedimento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 rounded-xl border-border"
                  data-testid="input-search"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64 py-3 rounded-xl" data-testid="select-category">
                  <SelectValue placeholder="Todas as especialidades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas as especialidades</SelectItem>
                  <SelectItem value="otorrino">Otorrinolaringologia</SelectItem>
                  <SelectItem value="cirurgia">Cirurgia Plástica Facial</SelectItem>
                  <SelectItem value="estetica">Medicina Estética</SelectItem>
                  <SelectItem value="alergia">Alergias</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Procedures Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-procedures">
            {filteredProcedures.map((procedure) => (
              <ProcedureCard
                key={procedure.id}
                procedure={procedure}
                onViewDetails={() => handleProcedureClick(procedure)}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProcedures.length === 0 && (
            <div className="text-center py-12" data-testid="message-no-results">
              <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold text-dark-teal mb-2">Nenhum procedimento encontrado</h3>
              <p className="text-muted-foreground">Tente usar outros termos de busca ou limpe os filtros</p>
            </div>
          )}

          {/* Botão Voltar no final */}
          <div className="text-center mt-16">
            <Link href="/">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-muted-foreground hover:text-vibrant-turquoise transition-colors mx-auto"
                data-testid="button-back-bottom"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Voltar à página inicial</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Procedure Modal */}
      <ProcedureModal
        procedure={selectedProcedure}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Procedures;
