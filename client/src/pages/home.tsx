import { Link } from "wouter";
import { Stethoscope, Syringe, Sparkles, Wind, GraduationCap, Globe, Award, ChevronUp, HelpCircle, CreditCard, Calendar, Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  const whatsappScheduleLink = "https://api.whatsapp.com/send?phone=5565996243541&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Mário%20Espósito.%20Poderia%20me%20informar%20os%20horários%20disponíveis?";
  
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
                  <FaWhatsapp className="mr-3 h-6 w-6" />
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
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/sao-35-anos-desde-a-formatura-em-medicina-atuando-com-eficiencia-na-profissao-que-busca-cuidar-.webp"
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
              bgColor="bg-vibrant-turquoise"
              onLearnMore={() => window.location.href = '/especialidades'}
              testId="card-specialty-surgery"
            />
            <SpecialtyCard
              title="Medicina Estética"
              description="Preenchimentos, toxina botulínica, fios de sustentação e tratamentos não-cirúrgicos"
              icon={<Sparkles className="text-2xl text-white" />}
              bgColor="bg-vibrant-turquoise"
              onLearnMore={() => window.location.href = '/especialidades'}
              testId="card-specialty-aesthetic"
            />
            <SpecialtyCard
              title="Alergias"
              description="Testes alérgicos, imunoterapia e tratamento da rinite alérgica"
              icon={<Wind className="text-2xl text-white" />}
              bgColor="bg-vibrant-turquoise"
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
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/09/sao-35-anos-desde-a-formatura-em-medicina-atuando-com-eficiencia-na-profissao-que-busca-cuidar-.webp"
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
              <FaWhatsapp className="mr-3 h-5 w-5" />
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-contact">
              Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-contact">
              Entre em contato para agendar sua consulta ou esclarecer dúvidas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-dark-teal mb-6" data-testid="title-contact-info">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
                    data-testid="contact-whatsapp"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <FaWhatsapp className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-teal">WhatsApp</h4>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/dr_marioesposito?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
                    data-testid="contact-instagram"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <FaInstagram className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-teal">Instagram</h4>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start space-x-4" data-testid="contact-address">
                    <div className="w-12 h-12 bg-soft-blue-green rounded-full flex items-center justify-center">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-teal">Endereço</h4>
                      <p className="text-muted-foreground">
                        <a href="https://maps.app.goo.gl/9Hx8eapad4FhjnWN9" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                          Centro Médico Hospital Otorrino<br />
                          R. Ten. Eulálio Guerra, 50<br />
                          Araes, Cuiabá - MT, 78005-510
                        </a>
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Hours and Quick Contact */}
            <div className="space-y-8">
              {/* Opening Hours */}
              <div>
                <h3 className="text-2xl font-bold text-dark-teal mb-6" data-testid="title-hours">
                  Horário de Atendimento
                </h3>
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center" data-testid="hours-weekday">
                        <span className="font-medium text-dark-teal">Segunda à Sexta</span>
                        <span className="text-muted-foreground">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center" data-testid="hours-saturday">
                        <span className="font-medium text-dark-teal">Sábado</span>
                        <span className="text-muted-foreground">08:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between items-center" data-testid="hours-sunday">
                        <span className="font-medium text-dark-teal">Domingo</span>
                        <span className="text-muted-foreground">Fechado</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground" data-testid="hours-note">
                        * Atendimento mediante agendamento prévio
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact */}
              <div className="bg-light-blue-pastel/20 p-6 rounded-2xl" data-testid="quick-contact">
                <h3 className="text-xl font-bold text-dark-teal mb-4">Agendamento Rápido</h3>
                <p className="text-muted-foreground mb-4">
                  Para maior agilidade, entre em contato pelo WhatsApp com uma mensagem pré-definida:
                </p>
                <a
                  href={whatsappScheduleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn text-white px-6 py-3 rounded-xl font-semibold inline-flex items-center"
                  data-testid="button-quick-whatsapp"
                >
                  <FaWhatsapp className="mr-3 h-5 w-5" />
                  Agendar via WhatsApp
                </a>
              </div>
            </div>
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
