import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-card/95 backdrop-blur-sm border-b border-border" : "bg-card/95 backdrop-blur-sm border-b border-border"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="link-home">
            <div className="text-2xl font-bold">
              <span className="text-dark-teal">DR.</span>
              <span className="text-vibrant-turquoise ml-1">Mário Espósito</span>
            </div>
            <div className="ml-2 text-sm text-dark-graphite-gray">
              CRM-MT 2338
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link font-medium transition-colors ${
                  location === item.href
                    ? "text-dark-teal"
                    : "text-muted-foreground hover:text-vibrant-turquoise"
                }`}
                data-testid={`link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-white px-4 py-2 rounded-lg font-medium flex items-center"
              data-testid="button-whatsapp"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" data-testid="button-mobile-menu">
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
                      data-testid={`link-mobile-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-green-600 font-medium"
                    data-testid="link-mobile-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    WhatsApp
                  </a>
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
