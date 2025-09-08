import { MessageCircle, Calendar, Clock, MapPin, CreditCard, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/common/faq-accordion";

const FAQ = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5565996243541&text=Olá,%20tenho%20algumas%20dúvidas%20sobre%20os%20atendimentos%20do%20Dr.%20Mário%20Espósito";

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
          <p className="mt-3 text-sm font-medium">
            * Atendimento mediante agendamento prévio
          </p>
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
      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-faq">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-faq">
              Encontre respostas para as dúvidas mais comuns sobre consultas, procedimentos e atendimento
            </p>
          </div>

          <FAQAccordion items={faqItems} className="mb-16" />

          {/* CTA Section */}
          <div className="bg-light-blue-pastel/20 p-8 rounded-2xl text-center" data-testid="faq-cta">
            <h2 className="text-2xl font-bold text-dark-teal mb-4">
              Ainda tem dúvidas?
            </h2>
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
              <MessageCircle className="mr-3 h-5 w-5" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;