import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  icon?: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

const FAQAccordion = ({ items, className = "" }: FAQAccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className={`space-y-4 ${className}`} data-testid="faq-accordion">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <Card 
            key={item.id} 
            className="shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            data-testid={`faq-item-${item.id}`}
          >
            <CardContent className="p-0">
              <button
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
                onClick={() => toggleItem(item.id)}
                data-testid={`faq-question-${item.id}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-vibrant-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                    {item.icon || <HelpCircle className="text-white h-5 w-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-dark-teal">
                    {item.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {isOpen && (
                <div 
                  className="px-6 pb-6 pl-20 animate-accordion-down"
                  data-testid={`faq-answer-${item.id}`}
                >
                  <div className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default FAQAccordion;