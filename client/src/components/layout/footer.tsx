import { Link } from "wouter";
import { Phone, Mail, MapPin, Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5565996243541";

  return (
    <footer className="bg-dark-teal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Dr. Mário Espósito</h3>
              <p className="text-light-blue-pastel">CRM-MT 2338</p>
            </div>
            <p className="text-light-bluish-gray leading-relaxed">
              Especialista em Otorrinolaringologia e Cirurgia Plástica Facial com mais de 20 anos de experiência.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-light-bluish-gray hover:text-vibrant-turquoise transition-colors"
                  data-testid="link-footer-home"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre" 
                  className="text-light-bluish-gray hover:text-vibrant-turquoise transition-colors"
                  data-testid="link-footer-about"
                >
                  Sobre o Dr. Mário
                </Link>
              </li>
              <li>
                <Link 
                  href="/especialidades" 
                  className="text-light-bluish-gray hover:text-vibrant-turquoise transition-colors"
                  data-testid="link-footer-specialties"
                >
                  Especialidades
                </Link>
              </li>
              <li>
                <Link 
                  href="/procedimentos" 
                  className="text-light-bluish-gray hover:text-vibrant-turquoise transition-colors"
                  data-testid="link-footer-procedures"
                >
                  Procedimentos
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-light-bluish-gray hover:text-vibrant-turquoise transition-colors"
                  data-testid="link-footer-faq"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="text-light-bluish-gray hover:text-vibrant-turquoise transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Especialidades</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-light-bluish-gray">Otorrinolaringologia</li>
              <li className="text-light-bluish-gray">Cirurgia Plástica Facial</li>
              <li className="text-light-bluish-gray">Medicina Estética</li>
              <li className="text-light-bluish-gray">Tratamento de Alergias</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-4 h-4 text-vibrant-turquoise" />
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light-bluish-gray hover:text-vibrant-turquoise text-sm"
                  data-testid="link-footer-whatsapp"
                >
                  (65) 99624-3541
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-vibrant-turquoise mt-1" />
                <span className="text-light-bluish-gray text-sm">
                  Centro Médico Hospital Otorrino<br />
                  R. Ten. Eulálio Guerra, 50<br />
                  Araes, Cuiabá - MT, 78005-510
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-graphite-gray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-bluish-gray text-sm mb-4 md:mb-0" data-testid="text-copyright">
              © 2024 Dr. Mário Espósito - CRM-MT 2338. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-light-bluish-gray hover:text-vibrant-turquoise text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-light-bluish-gray hover:text-vibrant-turquoise text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-dark-graphite-gray">
            <p className="text-light-bluish-gray text-xs text-center flex items-center justify-center" data-testid="text-disclaimer">
              <Info className="w-4 h-4 mr-2" />
              Este conteúdo é meramente informativo e não substitui uma consulta médica. 
              Consulte sempre um profissional de saúde qualificado para diagnóstico e tratamento adequados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
