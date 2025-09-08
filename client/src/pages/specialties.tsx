import { Stethoscope, Syringe, Sparkles, Wind, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Specialties = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5565996243541&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20especialidades%20do%20Dr.%20Mário%20Espósito";

  const specialties = [
    {
      id: 'otorrino',
      title: 'Otorrinolaringologia',
      icon: <Stethoscope className="text-2xl text-white" />,
      bgColor: 'bg-vibrant-turquoise',
      description: 'Prevenção, diagnóstico e tratamento de doenças do ouvido, nariz, garganta e distúrbios do sono. Especialização em rinite, sinusite, otite, apneia, labirintite, zumbido, rouquidão e halitose.',
      procedures: [
        'Adenoamigdalectomia',
        'Cirurgia do ronco e apneia',
        'Septoplastia e rinoseptoplastia',
        'Timpanoplastia e implante coclear',
        'Exames auditivos completos'
      ]
    },
    {
      id: 'cirurgia',
      title: 'Cirurgia Plástica Facial',
      icon: <Syringe className="text-2xl text-white" />,
      bgColor: 'bg-soft-blue-green',
      description: 'Procedimentos cirúrgicos estéticos e funcionais para harmonização facial, sempre priorizando resultados naturais e a funcionalidade respiratória quando aplicável.',
      procedures: [
        'Rinoplastia (harmonia + função)',
        'Blefaroplastia (cirurgia das pálpebras)',
        'Ritidoplastia (lifting facial)',
        'Otoplastia e mentoplastia',
        'Lipoaspiração cervical'
      ]
    },
    {
      id: 'estetica',
      title: 'Medicina Estética',
      icon: <Sparkles className="text-2xl text-dark-teal" />,
      bgColor: 'bg-light-blue-pastel',
      description: 'Tratamentos não-cirúrgicos para rejuvenescimento facial, harmonização e correção de imperfeições, sempre com foco em resultados naturais e seguros.',
      procedures: [
        'Toxina botulínica (Botox® e Dysport®)',
        'Preenchimentos com ácido hialurônico',
        'Bichectomia e bioplastia',
        'Fios de sustentação',
        'Peelings e carboxiterapia'
      ]
    },
    {
      id: 'alergia',
      title: 'Alergias',
      icon: <Wind className="text-2xl text-white" />,
      bgColor: 'bg-light-bluish-gray',
      description: 'Diagnóstico e tratamento especializado de alergias respiratórias, com foco na rinite alérgica e imunoterapia personalizada com resultados comprovados.',
      procedures: [
        'Rinite alérgica - diagnóstico e tratamento',
        'Testes alérgicos completos',
        'Imunoterapia (vacinas para alergia)',
        'Resultados em mais de 70% dos casos',
        'Acompanhamento personalizado'
      ]
    }
  ];

  return (
    <div>
      <section className="py-20" data-testid="section-specialties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-specialties">
              Especialidades
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-specialties">
              Tratamentos especializados com as mais modernas técnicas e equipamentos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {specialties.map((specialty) => (
              <Card key={specialty.id} className="bg-card shadow-lg" data-testid={`card-specialty-${specialty.id}`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 ${specialty.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      {specialty.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-dark-teal" data-testid={`title-${specialty.id}`}>
                      {specialty.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`description-${specialty.id}`}>
                    {specialty.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {specialty.procedures.map((procedure, index) => (
                      <div key={index} className="flex items-center space-x-3" data-testid={`procedure-${specialty.id}-${index}`}>
                        <Check className={`w-5 h-5 ${specialty.id === 'estetica' ? 'text-light-blue-pastel' : specialty.bgColor.replace('bg-', 'text-')}`} />
                        <span className="text-sm text-muted-foreground">{procedure}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/procedimentos">
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-accent font-semibold p-0"
                      data-testid={`button-procedures-${specialty.id}`}
                    >
                      Ver todos os procedimentos →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center"
              data-testid="button-whatsapp"
            >
              <FaWhatsapp className="mr-3 h-5 w-5" />
              Agende uma consulta
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
