import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Info, Send, CheckCircle } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappLink = "https://api.whatsapp.com/send?phone=5565996243541&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Mário%20Espósito";
  const whatsappScheduleLink = "https://api.whatsapp.com/send?phone=5565996243541&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Mário%20Espósito.%20Poderia%20me%20informar%20os%20horários%20disponíveis?";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message || !formData.subject) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Recebemos sua mensagem e responderemos em até 24 horas úteis.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-20" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-teal" data-testid="title-contact">
              Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="description-contact">
              Entre em contato para agendar sua consulta ou esclarecer dúvidas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-dark-teal mb-6" data-testid="title-contact-info">
                  Informações de Contato
                </h2>
                <div className="space-y-4">
                  {/* WhatsApp */}
                  <div data-testid="contact-whatsapp">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-vibrant-turquoise transition-colors block"
                      data-testid="link-whatsapp"
                    >
                      WhatsApp
                    </a>
                  </div>

                  {/* Instagram */}
                  <div data-testid="contact-instagram">
                    <a
                      href="https://www.instagram.com/dr_marioesposito?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-vibrant-turquoise transition-colors block"
                      data-testid="link-instagram"
                    >
                      Instagram
                    </a>
                  </div>

                  {/* Address */}
                  <div data-testid="contact-address">
                    <h3 className="font-medium text-gray-800 mb-1">Endereço</h3>
                    <a href="https://maps.app.goo.gl/9Hx8eapad4FhjnWN9" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-vibrant-turquoise transition-colors block">
                      <p>Centro Médico Hospital Otorrino</p>
                      <p>R. Ten. Eulálio Guerra, 50</p>
                      <p>Araes, Cuiabá - MT, 78005-510</p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h2 className="text-2xl font-bold text-dark-teal mb-8" data-testid="title-hours">
                  Horário de Atendimento
                </h2>
                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100" data-testid="hours-weekday">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-bold text-dark-teal text-lg">Segunda à Sexta</span>
                        </div>
                        <span className="text-vibrant-turquoise font-semibold text-lg">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-100" data-testid="hours-saturday">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="font-bold text-dark-teal text-lg">Sábado</span>
                        </div>
                        <span className="text-vibrant-turquoise font-semibold text-lg">08:00 - 12:00</span>
                      </div>
                      <div className="flex justify-between items-center py-3" data-testid="hours-sunday">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="font-bold text-dark-teal text-lg">Domingo</span>
                        </div>
                        <span className="text-muted-foreground font-semibold text-lg">Fechado</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-vibrant-turquoise/20 bg-light-blue-pastel/30 rounded-xl p-4">
                      <p className="text-sm text-dark-teal font-medium text-center" data-testid="hours-note">
                        💡 Atendimento mediante agendamento prévio
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

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark-teal mb-6" data-testid="title-form">
                Envie uma Mensagem
              </h2>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
                    <div>
                      <Label htmlFor="name" className="text-dark-teal font-medium">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2 rounded-xl"
                        placeholder="Seu nome completo"
                        data-testid="input-name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-dark-teal font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2 rounded-xl"
                          placeholder="seu@email.com"
                          data-testid="input-email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-dark-teal font-medium">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2 rounded-xl"
                          placeholder="(65) 99999-9999"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-dark-teal font-medium">Assunto *</Label>
                      <Select value={formData.subject} onValueChange={handleSubjectChange}>
                        <SelectTrigger className="mt-2 rounded-xl" data-testid="select-subject">
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulta">Agendamento de consulta</SelectItem>
                          <SelectItem value="procedimento">Informações sobre procedimento</SelectItem>
                          <SelectItem value="convenio">Convênios médicos</SelectItem>
                          <SelectItem value="duvida">Dúvida geral</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-dark-teal font-medium">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2 rounded-xl"
                        placeholder="Descreva sua dúvida ou o que gostaria de saber..."
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-semibold text-lg hover:bg-accent"
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </div>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center" data-testid="text-response-time">
                      Responderemos em até 24 horas úteis
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-dark-teal mb-6 text-center" data-testid="title-location">
              Localização
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-4">
                <div className="w-full h-96 rounded-xl overflow-hidden" data-testid="map-interactive">
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
      </section>
    </div>
  );
};

export default Contact;
