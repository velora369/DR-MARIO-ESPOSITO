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

  const faqItems = [
    {
      id: "convenios",
      question: "Quais convênios médicos o Dr. Mário Espósito atende?",
      answer: (
        <div className="space-y-2">
          <p>Atualmente o Dr. Mário Espósito atende os seguintes convênios:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Unimed</strong></li>
            <li><strong>Pax Nacional Prever</strong></li>
          </ul>
          <p className="mt-3 text-sm">
            Para consultas particulares ou outros convênios, entre em contato para mais informações.
          </p>
        </div>
      ),
      icon: <CreditCard className="text-white h-5 w-5" />
    },
    {
      id: "agendamento",
      question: "Como agendar uma consulta?",
      answer: (
        <div className="space-y-2">
          <p>Você pode agendar sua consulta de três formas fáceis:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>WhatsApp:</strong> (65) 99624-3541 - Forma mais rápida e prática</li>
            <li><strong>Presencialmente:</strong> No consultório durante o horário de atendimento</li>
          </ul>
          <p className="mt-3 text-sm">
            Recomendamos o agendamento com antecedência, especialmente para procedimentos cirúrgicos.
          </p>
        </div>
      ),
      icon: <Calendar className="text-white h-5 w-5" />
    },
    {
      id: "horarios",
      question: "Quais são os horários de atendimento?",
      answer: (
        <div className="space-y-2">
          <p>O consultório funciona nos seguintes horários:</p>
          <div className="space-y-1 ml-4">
            <p><strong>Segunda à Sexta:</strong> 08:00 às 18:00</p>
            <p><strong>Sábado:</strong> 08:00 às 12:00</p>
            <p><strong>Domingo:</strong> Fechado</p>
          </div>
        </div>
      ),
      icon: <Clock className="text-white h-5 w-5" />
    },
    {
      id: "localizacao",
      question: "Onde o Dr. Mário atende?",
      answer: (
        <div className="space-y-2">
          <p>O consultório está localizado em:</p>
          <div className="ml-4">
            <p><strong>Centro Médico Hospital Otorrino</strong></p>
            <p>R. Ten. Eulálio Guerra, 50</p>
            <p>Araes, Cuiabá - MT, 78005-510</p>
          </div>
          <p className="mt-3">
            O consultório conta com estacionamento próprio e fica próximo ao centro da cidade, 
            facilitando o acesso por transporte público e particular.
          </p>
        </div>
      ),
      icon: <MapPin className="text-white h-5 w-5" />
    },
    {
      id: "cobertura-procedimentos",
      question: "Os procedimentos são cobertos por convênio ou apenas particulares?",
      answer: (
        <div className="space-y-2">
          <p>A cobertura varia conforme o tipo de procedimento:</p>
          <div className="space-y-2 ml-4">
            <div>
              <p><strong>Cobertos por convênio:</strong></p>
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>Consultas otorrinolaringológicas</li>
                <li>Tratamento de rinite, sinusite e outras patologias</li>
                <li>Cirurgias funcionais (septoplastia, adenoamigdalectomia)</li>
                <li>Testes alérgicos e imunoterapia</li>
              </ul>
            </div>
            <div>
              <p><strong>Particulares:</strong></p>
              <ul className="list-disc list-inside ml-4 text-sm">
                <li>Cirurgias plásticas faciais</li>
                <li>Procedimentos estéticos (botox, preenchimentos)</li>
                <li>Bichectomia e procedimentos cosméticos</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm">
            Entre em contato para esclarecer a cobertura do seu procedimento específico.
          </p>
        </div>
      ),
      icon: <CreditCard className="text-white h-5 w-5" />
    },
    {
      id: "primeira-consulta",
      question: "O que levar na primeira consulta?",
      answer: (
        <div className="space-y-2">
          <p>Para sua primeira consulta, traga:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Documento de identidade (RG ou CNH)</li>
            <li>CPF</li>
            <li>Cartão do convênio (se aplicável)</li>
            <li>Exames anteriores relacionados ao problema</li>
            <li>Lista de medicamentos em uso</li>
            <li>Histórico médico relevante</li>
          </ul>
          <p className="mt-3 text-sm">
            Chegue com 15 minutos de antecedência para realizar o cadastro.
          </p>
        </div>
      ),
      icon: <Phone className="text-white h-5 w-5" />
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
                  className="whatsapp-btn text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-14 w-full sm:min-w-[280px] whitespace-nowrap"
                  data-testid="button-hero-whatsapp"
                >
                  <FaWhatsapp className="mr-3 h-6 w-6" />
                  Agende sua consulta
                </a>
                <Link href="/especialidades" className="w-full sm:min-w-[280px]">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-bluish-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border-bluish-white/20 hover:bg-bluish-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-14 w-full flex items-center justify-center whitespace-nowrap"
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
      <section id="section-why-choose" className="py-20" data-testid="section-why-choose">
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
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-bluish-white" data-testid="section-faq">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-faq">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-faq">
              Encontre respostas para as dúvidas mais comuns sobre consultas, procedimentos e atendimento
            </p>
          </div>

          <FAQAccordion items={faqItems} className="mb-16" />

          {/* CTA Section */}
          <div className="bg-light-blue-pastel/20 p-8 rounded-2xl text-center" data-testid="faq-cta">
            <h3 className="text-2xl font-bold text-dark-teal mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Fale diretamente pelo WhatsApp e tire todas as suas perguntas.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center"
              data-testid="button-faq-whatsapp"
            >
              <FaWhatsapp className="mr-3 h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contato" className="py-20 bg-muted" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-contact">
              Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-contact">
              Entre em contato para agendar sua consulta ou esclarecer dúvidas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {/* Contact Information */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-dark-teal mb-6" data-testid="title-contact-info">
                Informações de Contato
              </h3>
              
              <div className="flex-1 space-y-6">
                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-bluish-white/60 p-4 rounded-lg transition-colors group"
                  data-testid="contact-whatsapp"
                >
                  <div className="w-10 h-10 bg-vibrant-turquoise rounded-full flex items-center justify-center group-hover:bg-soft-blue-green transition-colors">
                    <FaWhatsapp className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#59bfcd]">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">Clique para conversar</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                href="https://www.instagram.com/dr_marioesposito?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:bg-bluish-white/60 p-4 rounded-lg transition-colors group"
                data-testid="contact-instagram"
              >
                <div className="w-10 h-10 bg-soft-blue-green rounded-full flex items-center justify-center group-hover:bg-vibrant-turquoise transition-colors">
                  <FaInstagram className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#6faab4]">Instagram</h4>
                  <p className="text-sm text-[#6fabb4]">@dr_marioesposito</p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/9Hx8eapad4FhjnWN9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 hover:bg-bluish-white/60 p-4 rounded-lg transition-colors group"
                data-testid="contact-address"
              >
                <div className="w-10 h-10 bg-dark-teal rounded-full flex items-center justify-center group-hover:bg-dark-graphite-gray transition-colors">
                  <MapPin className="text-white h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-teal">Endereço</h4>
                  <p className="text-sm text-[#14313e]">
                    Centro Médico Hospital Otorrino<br />
                    R. Ten. Eulálio Guerra, 50<br />
                    Araes, Cuiabá - MT, 78005-510
                  </p>
                </div>
              </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-dark-teal mb-6" data-testid="title-hours">
                Horário de Atendimento
              </h3>
              <div className="flex-1">
                <Card className="shadow-lg border-0 h-full">
                  <CardContent className="p-6 h-full flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100" data-testid="hours-weekday">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-dark-teal">Segunda à Sexta</span>
                        </div>
                        <span className="text-vibrant-turquoise font-medium">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100" data-testid="hours-saturday">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-dark-teal">Sábado</span>
                        </div>
                        <span className="text-vibrant-turquoise font-medium">08:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2" data-testid="hours-sunday">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-dark-teal">Domingo</span>
                        </div>
                        <span className="text-muted-foreground font-medium">Fechado</span>
                      </div>
                      <div className="mt-6 pt-4 border-t border-vibrant-turquoise/20 bg-light-blue-pastel/30 rounded-xl p-4">
                        <p className="text-sm text-dark-teal font-medium text-center" data-testid="hours-note">
                          Atendimento mediante agendamento prévio
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Section */}
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold text-dark-teal mb-6" data-testid="title-location">
                Localização
              </h3>
              <div className="flex-1">
                <Card className="shadow-lg border-0 h-full">
                  <CardContent className="p-4 h-full">
                    <div className="w-full h-full rounded-xl overflow-hidden" style={{ minHeight: '320px' }} data-testid="map-interactive">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.8282!2d-56.09456!3d-15.60181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939a0eb64e7f8d77%3A0x123456789abcdef!2sR.%20Ten.%20Eul%C3%A1lio%20Guerra%2C%2050%20-%20Araes%2C%20Cuiab%C3%A1%20-%20MT%2C%2078005-510!5e0!3m2!1sen!2sbr!4v1625680000000!5m2!1sen!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Centro Médico Hospital Otorrino - Dr. Mário Espósito"
                    ></iframe>
                    </div>
                  </CardContent>
                </Card>
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
