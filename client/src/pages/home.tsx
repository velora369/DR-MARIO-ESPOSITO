import { Link } from "wouter";
import { MessageCircle, Stethoscope, Syringe, Sparkles, Wind, GraduationCap, Globe, Award, ChevronUp, HelpCircle, CreditCard, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpecialtyCard from "@/components/common/specialty-card";
import ProcedureCard from "@/components/common/procedure-card";
import FAQAccordion from "@/components/common/faq-accordion";
import { proceduresData } from "@/lib/procedures-data";
import { useEffect, useState } from "react";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappLink = "https://api.whatsapp.com/send?phone=5565996243541&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Mário%20Espósito";
  
  const featuredProcedures = proceduresData.filter(p => 
    ['rinoplastia', 'botox', 'ronco'].includes(p.id)
  );

  const faqPreviewItems = [
    {
      id: "convenios-preview",
      question: "Quais convênios médicos o Dr. Mário Espósito atende?",
      answer: "Atualmente atendemos Unimed e Pax Nacional Prever. Para outros convênios ou consultas particulares, entre em contato.",
      icon: <CreditCard className="text-white h-5 w-5" />
    },
    {
      id: "agendamento-preview", 
      question: "Como agendar uma consulta?",
      answer: "Você pode agendar pelo WhatsApp (65) 99624-3541 ou presencialmente no consultório.",
      icon: <Calendar className="text-white h-5 w-5" />
    },
    {
      id: "primeira-consulta-preview",
      question: "O que levar na primeira consulta?",
      answer: "Traga documento de identidade, CPF, cartão do convênio, exames anteriores e lista de medicamentos em uso.",
      icon: <HelpCircle className="text-white h-5 w-5" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" data-testid="title-hero">
                Respire melhor.<br />
                Viva melhor.<br />
                <span className="text-light-blue-pastel">Valorize sua autoestima.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-light-blue-pastel font-light leading-relaxed" data-testid="description-hero">
                Cuidado especializado em Otorrinolaringologia e Cirurgia Plástica Facial com mais de 20 anos de experiência e reconhecimento internacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-14 min-w-[280px] whitespace-nowrap"
                  data-testid="button-hero-whatsapp"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Agende sua consulta
                </a>
                <Link href="/especialidades">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-bluish-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-bluish-white/20 hover:bg-bluish-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-14 min-w-[280px] flex items-center justify-center whitespace-nowrap"
                    data-testid="button-hero-specialties"
                  >
                    Conheça as especialidades
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Consultório médico moderno e profissional"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="py-20 bg-bluish-white smooth-section animate-fade-in" data-testid="section-specialties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-specialties">
              Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-specialties">
              Tratamentos especializados com técnicas modernas e resultados comprovados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SpecialtyCard
              title="Otorrinolaringologia"
              description="Tratamento de doenças do ouvido, nariz, garganta e distúrbios do sono"
              icon={<Stethoscope className="text-2xl text-white" />}
              bgColor="bg-vibrant-turquoise"
              onLearnMore={() => window.location.href = '/especialidades'}
              testId="card-specialty-otorrino"
            />
            <SpecialtyCard
              title="Cirurgia Plástica Facial"
              description="Rinoplastia, lifting facial, blefaroplastia e outros procedimentos estéticos"
              icon={<Syringe className="text-2xl text-white" />}
              bgColor="bg-soft-blue-green"
              onLearnMore={() => window.location.href = '/especialidades'}
              testId="card-specialty-surgery"
            />
            <SpecialtyCard
              title="Medicina Estética"
              description="Preenchimentos, toxina botulínica, fios de sustentação e tratamentos não-cirúrgicos"
              icon={<Sparkles className="text-2xl text-dark-teal" />}
              bgColor="bg-light-blue-pastel"
              onLearnMore={() => window.location.href = '/especialidades'}
              testId="card-specialty-aesthetic"
            />
            <SpecialtyCard
              title="Alergias"
              description="Testes alérgicos, imunoterapia e tratamento da rinite alérgica"
              icon={<Wind className="text-2xl text-white" />}
              bgColor="bg-light-bluish-gray"
              onLearnMore={() => window.location.href = '/especialidades'}
              testId="card-specialty-allergies"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Mario */}
      <section className="py-20" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Dr. Mário Espósito - Médico especialista"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-doctor"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-why-choose">
                Por que escolher o Dr. Mário Espósito?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="quote-doctor">
                "O Dr. Mário Espósito alia experiência acadêmica, prática clínica e técnicas modernas para cuidar da saúde e da estética facial de seus pacientes, sempre com segurança, ética e resultados naturais."
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="feature-academic">
                  <div className="w-12 h-12 bg-vibrant-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-teal text-lg">Formação Acadêmica Excepcional</h3>
                    <p className="text-muted-foreground">Professor universitário, Mestre e Doutor em Otorrinolaringologia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="feature-international">
                  <div className="w-12 h-12 bg-soft-blue-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-teal text-lg">Reconhecimento Internacional</h3>
                    <p className="text-muted-foreground">Membro de associações médicas nacionais e internacionais</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="feature-experience">
                  <div className="w-12 h-12 bg-light-blue-pastel rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-dark-teal h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-teal text-lg">Experiência Comprovada</h3>
                    <p className="text-muted-foreground">Mais de 20 anos dedicados à otorrinolaringologia e cirurgia facial</p>
                  </div>
                </div>
              </div>

              <Link href="/sobre">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent mt-8 mb-[12px]"
                  data-testid="button-learn-more-doctor"
                >
                  Conheça mais sobre o Dr. Mário
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Procedures */}
      <section className="py-20 bg-muted" data-testid="section-procedures">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-procedures">
              Procedimentos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-procedures">
              Conheça alguns dos principais tratamentos oferecidos em nosso consultório
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProcedures.map((procedure) => (
              <ProcedureCard
                key={procedure.id}
                procedure={procedure}
                onViewDetails={() => {
                  // This would open the modal, but we'll navigate for now
                  window.location.href = '/procedimentos';
                }}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/procedimentos">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent"
                data-testid="button-all-procedures"
              >
                Ver todos os procedimentos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-bluish-white" data-testid="section-faq-preview">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-faq-preview">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-faq-preview">
              Encontre respostas rápidas para as principais dúvidas sobre nossos atendimentos
            </p>
          </div>

          <FAQAccordion items={faqPreviewItems} className="mb-12" />

          <div className="text-center">
            <Link href="/faq">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent mr-4"
                data-testid="button-all-faq"
              >
                Ver todas as perguntas
              </Button>
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center"
              data-testid="button-faq-whatsapp"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-all z-40"
          data-testid="button-scroll-top"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Home;
