import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMoving, setIsUserMoving] = useState(false);
  const [showDoctorName, setShowDoctorName] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleUserMovement = () => {
      setIsUserMoving(true);
      setShowDoctorName(false);
      
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        setIsUserMoving(false);
        setShowDoctorName(true);
      }, 1500); // Nome reaparece após 1.5s sem movimento
    };

    // Detectar movimento do mouse e scroll
    window.addEventListener("mousemove", handleUserMovement);
    window.addEventListener("scroll", handleUserMovement);
    window.addEventListener("touchmove", handleUserMovement);

    return () => {
      window.removeEventListener("mousemove", handleUserMovement);
      window.removeEventListener("scroll", handleUserMovement);
      window.removeEventListener("touchmove", handleUserMovement);
      clearTimeout(moveTimeout);
    };
  }, []);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Especialidades", href: "/especialidades" },
    { name: "Procedimentos", href: "/procedimentos" },
    { name: "FAQ", href: "/faq" },
    { name: "Contato", href: "/contato" },
  ];

  const whatsappLink = "https://api.whatsapp.com/send?phone=5565996243541&text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Mário%20Espósito";

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          {/* Logo - posicionado à esquerda */}
          <div className="absolute left-0">
            <Link href="/" className="flex items-center" data-testid="link-home">
              <div 
                className={`text-2xl font-bold transition-all duration-300 ease-in-out ${
                  showDoctorName ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-2'
                }`}
              >
                <span className="text-dark-teal">Dr.</span>
                <span className="text-vibrant-turquoise ml-1">
                  Mário Espósito
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu - centralizado */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  location === item.href
                    ? "text-dark-teal"
                    : "text-muted-foreground hover:text-vibrant-turquoise"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Hamburger menu - posicionado à direita em mobile */}
          <div className="absolute right-0 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" data-testid="button-hamburger-menu">
                  <Menu className="h-6 w-6 text-muted-foreground" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors ${
                        location === item.href
                          ? "text-dark-teal"
                          : "text-muted-foreground hover:text-vibrant-turquoise"
                      }`}
                      data-testid={`link-menu-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t border-border pt-4 mt-6 space-y-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-btn text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center w-full"
                      data-testid="link-menu-whatsapp"
                    >
                      <FaWhatsapp className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/dr_marioesposito?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center w-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                      data-testid="link-menu-instagram"
                    >
                      <FaInstagram className="w-4 h-4 mr-2" />
                      Instagram
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
