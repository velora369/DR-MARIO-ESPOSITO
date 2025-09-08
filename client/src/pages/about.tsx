import { Link } from "wouter";
import { MessageCircle, GraduationCap, Hospital, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const whatsappLink = "https://wa.me/5565999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Mário%20Espósito";

  const academicFormation = [
    "Mestre em Otorrinolaringologia pela UFRJ-RJ",
    "Doutor em Otorrinolaringologia pela Faculdade de Ciências Médicas da Santa Casa de São Paulo-SP",
    "Pós-Graduação em Cirurgia de Cabeça e Pescoço pela PUC-RJ",
    "Pós-Graduação em Medicina Estética e Cirurgia Plástica da Face pelo IBPG-SP"
  ];

  const professionalActivity = [
    "Professor da Faculdade de Medicina da Universidade de Cuiabá-MT",
    "Chefe do Serviço de Otorrinolaringologia do Hospital Geral Universitário (HGU) – Cuiabá-MT",
    "Coordenador da Residência Médica em Otorrinolaringologia e Cirurgia Cérvico-Facial do Hospital Otorrino-Cuiabá-MT"
  ];

  const memberships = [
    "Membro Titular da Associação Brasileira de Otorrinolaringologia e Cirurgia Cérvico-Facial",
    "Membro Fundador da Interamerican Association of Pediatric Otolaringology",
    "Membro da International Federation of Facial Plastic Surgery Societies",
    "Membro Efetivo da Sociedade Brasileira de Alergia e Imunopatologia (SBAI)",
    "Membro Titular do Colégio Brasileiro de Cirurgiões (TCBC)",
    "Membro Titular da Academia Brasileira de Cirurgia Plástica da Face"
  ];

  return (
    <div>
      <section className="py-20" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                alt="Dr. Mário Espósito em seu consultório"
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-doctor"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-dark-teal mb-4" data-testid="title-doctor">
                  Dr. Mário Espósito
                </h1>
                <p className="text-xl text-muted-foreground" data-testid="text-crm">CRM-MT 2338</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="description-intro">
                O Dr. Mário Espósito é reconhecido como uma das principais autoridades em Otorrinolaringologia e Cirurgia Plástica Facial no Brasil, com mais de duas décadas de experiência dedicadas ao cuidado integral da saúde e estética facial.
              </p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-dark-teal mb-4" data-testid="title-academic">Formação Acadêmica</h2>
                  <div className="space-y-3">
                    {academicFormation.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3" data-testid={`academic-${index}`}>
                        <GraduationCap className="text-vibrant-turquoise mt-1 h-5 w-5 flex-shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-teal mb-4" data-testid="title-professional">Atuação Profissional</h2>
                  <div className="space-y-3">
                    {professionalActivity.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3" data-testid={`professional-${index}`}>
                        <Hospital className="text-soft-blue-green mt-1 h-5 w-5 flex-shrink-0" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-dark-teal mb-4" data-testid="title-memberships">Membros e Associações</h2>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="space-y-3">
                      {memberships.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3" data-testid={`membership-${index}`}>
                          <Award className="text-light-blue-pastel mt-1 h-4 w-4 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light-blue-pastel/20 p-6 rounded-2xl" data-testid="quote-message">
                <p className="text-lg text-dark-teal italic font-medium leading-relaxed">
                  "O Dr. Mário Espósito alia experiência acadêmica, prática clínica e técnicas modernas para cuidar da saúde e da estética facial de seus pacientes, sempre com segurança, ética e resultados naturais."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center"
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Agende sua consulta
                </a>
                <Link href="/especialidades">
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="px-8 py-4 rounded-xl font-semibold text-lg"
                    data-testid="button-specialties"
                  >
                    Ver especialidades
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
