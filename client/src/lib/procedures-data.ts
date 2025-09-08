export interface Procedure {
  id: string;
  name: string;
  category: 'otorrino' | 'cirurgia' | 'estetica' | 'alergia';
  description: string;
  icon: string;
  details: {
    fullDescription: string;
    indications: string[];
    process: string;
    recovery: string;
    risks: string;
    care: string;
  };
}

export const proceduresData: Procedure[] = [
  // Otorrinolaringologia
  {
    id: 'rinoplastia',
    name: 'Rinoplastia',
    category: 'otorrino',
    description: 'Cirurgia do nariz que combina harmonia facial e melhora da função respiratória',
    icon: 'nose',
    details: {
      fullDescription: 'A rinoplastia é uma cirurgia que visa harmonizar o nariz com as demais estruturas faciais, podendo também corrigir problemas funcionais respiratórios.',
      indications: ['Insatisfação com a forma do nariz', 'Dificuldades respiratórias', 'Trauma nasal', 'Assimetrias nasais'],
      process: 'A cirurgia é realizada sob anestesia geral, com duração média de 2 a 3 horas. O médico remodela a estrutura óssea e cartilaginosa do nariz.',
      recovery: 'Repouso de 7 a 10 dias, uso de tampão nasal por 24-48h, resultado final em 12 meses.',
      risks: 'Como toda cirurgia, apresenta riscos de infecção, sangramento e reações à anestesia.',
      care: 'Evitar exposição solar, não usar óculos por 60 dias, seguir medicação prescrita.'
    }
  },
  {
    id: 'septoplastia',
    name: 'Septoplastia',
    category: 'otorrino',
    description: 'Correção do septo nasal desviado para melhorar a respiração',
    icon: 'lungs',
    details: {
      fullDescription: 'A septoplastia é um procedimento cirúrgico que corrige o desvio do septo nasal, melhorando significativamente a capacidade respiratória.',
      indications: ['Desvio de septo nasal', 'Dificuldade para respirar', 'Ronco causado por obstrução nasal', 'Sinusites recorrentes'],
      process: 'Cirurgia realizada por via endonasal, sem cortes externos, com duração de 1 a 2 horas.',
      recovery: 'Repouso de 5 a 7 dias, melhora respiratória gradual em 2 a 4 semanas.',
      risks: 'Sangramentos leves, alteração temporária do olfato, infecção (rara).',
      care: 'Limpeza nasal com soro fisiológico, evitar assoar o nariz com força, seguir medicação prescrita.'
    }
  },
  {
    id: 'ronco',
    name: 'Cirurgia do Ronco',
    category: 'otorrino',
    description: 'Tratamento cirúrgico para apneia do sono e ronco',
    icon: 'moon',
    details: {
      fullDescription: 'Procedimento cirúrgico para tratamento da apneia obstrutiva do sono e ronco, melhorando significativamente a qualidade do sono.',
      indications: ['Ronco intenso', 'Apneia do sono', 'Sonolência diurna', 'Problemas respiratórios noturnos'],
      process: 'Cirurgia realizada para ampliar as vias aéreas superiores, removendo ou reduzindo tecidos obstrutivos.',
      recovery: 'Internação de 24h, repouso de 1 semana, melhora gradual em 30 dias.',
      risks: 'Riscos cirúrgicos padrão, possível alteração temporária na deglutição.',
      care: 'Dieta líquida/pastosa inicialmente, evitar esforços, seguir acompanhamento médico.'
    }
  },
  // Cirurgia Plástica Facial
  {
    id: 'blefaroplastia',
    name: 'Blefaroplastia',
    category: 'cirurgia',
    description: 'Cirurgia das pálpebras para rejuvenescimento do olhar',
    icon: 'eye',
    details: {
      fullDescription: 'A blefaroplastia é uma cirurgia que remove o excesso de pele e gordura das pálpebras, proporcionando um olhar mais jovem e descansado.',
      indications: ['Excesso de pele nas pálpebras', 'Bolsas de gordura', 'Aspecto cansado do olhar', 'Ptose palpebral'],
      process: 'Cirurgia realizada com anestesia local e sedação, duração de 1 a 2 horas.',
      recovery: 'Repouso de 5 dias, resultado final em 3 meses, volta ao trabalho em 1 semana.',
      risks: 'Hematomas, edema, alteração temporária da sensibilidade.',
      care: 'Compressas frias, uso de óculos escuros, evitar esforços, seguir medicação prescrita.'
    }
  },
  {
    id: 'lifting',
    name: 'Lifting Facial',
    category: 'cirurgia',
    description: 'Rejuvenescimento facial com resultados naturais e duradouros',
    icon: 'smile',
    details: {
      fullDescription: 'O lifting facial é um procedimento que reposiciona os tecidos faciais, reduzindo a flacidez e proporcionando um aspecto mais jovem e natural.',
      indications: ['Flacidez facial', 'Rugas profundas', 'Perda de definição do contorno facial', 'Envelhecimento avançado'],
      process: 'Cirurgia realizada sob anestesia geral, com duração de 3 a 5 horas.',
      recovery: 'Repouso de 2 semanas, resultado final em 6 meses, retorno gradual às atividades.',
      risks: 'Hematomas, edema, alteração temporária da sensibilidade, cicatrizes.',
      care: 'Repouso absoluto inicial, drenagem linfática após liberação médica, proteção solar rigorosa.'
    }
  },
  {
    id: 'otoplastia',
    name: 'Otoplastia',
    category: 'cirurgia',
    description: 'Correção da orelha de abano e outras deformidades',
    icon: 'ear',
    details: {
      fullDescription: 'A otoplastia é uma cirurgia que corrige deformidades das orelhas, incluindo a orelha de abano, proporcionando maior harmonia facial.',
      indications: ['Orelha de abano', 'Assimetrias das orelhas', 'Deformidades congênitas', 'Traumas auriculares'],
      process: 'Cirurgia realizada com anestesia local ou geral (em crianças), duração de 1 a 2 horas.',
      recovery: 'Uso de faixa protetora por 30 dias, retorno às atividades em 1 semana.',
      risks: 'Hematomas, infecção, alteração da sensibilidade, cicatrizes.',
      care: 'Uso da faixa conforme orientação, evitar dormir de lado, proteção durante atividades físicas.'
    }
  },
  // Medicina Estética
  {
    id: 'botox',
    name: 'Toxina Botulínica',
    category: 'estetica',
    description: 'Tratamento para rugas de expressão com resultados naturais',
    icon: 'zap',
    details: {
      fullDescription: 'Tratamento com toxina botulínica para redução de rugas dinâmicas e linhas de expressão, proporcionando um aspecto mais jovem e descansado.',
      indications: ['Rugas na testa', 'Pés de galinha', 'Rugas entre as sobrancelhas', 'Prevenção de rugas'],
      process: 'Aplicação de pequenas doses da toxina através de microagulhas, procedimento rápido de 15-30 minutos.',
      recovery: 'Sem tempo de recuperação, efeito aparece em 3-7 dias, duração de 4-6 meses.',
      risks: 'Efeitos colaterais raros incluem hematomas leves e assimetria temporária.',
      care: 'Evitar exercícios intensos por 24h, não massagear a região, não se deitar por 4h.'
    }
  },
  {
    id: 'preenchimento',
    name: 'Preenchimento',
    category: 'estetica',
    description: 'Preenchimento com ácido hialurônico para harmonização facial',
    icon: 'droplet',
    details: {
      fullDescription: 'O preenchimento com ácido hialurônico restaura volumes perdidos e harmoniza os contornos faciais de forma natural e segura.',
      indications: ['Sulcos nasogenianos', 'Aumento de lábios', 'Harmonização do queixo', 'Correção de olheiras'],
      process: 'Aplicação com microagulhas ou microcânulas, procedimento de 30-60 minutos.',
      recovery: 'Sem tempo de inatividade, resultado imediato, pode haver inchaço leve.',
      risks: 'Hematomas leves, edema temporário, reações alérgicas (raras).',
      care: 'Evitar exercícios intensos por 24h, aplicar gelo se necessário, massagem suave conforme orientação.'
    }
  },
  {
    id: 'bichectomia',
    name: 'Bichectomia',
    category: 'estetica',
    description: 'Afinamento facial através da remoção das bolas de Bichat',
    icon: 'minus',
    details: {
      fullDescription: 'A bichectomia é um procedimento que remove parte das bolas de Bichat, proporcionando um afinamento facial e maior definição dos contornos.',
      indications: ['Rosto muito arredondado', 'Excesso de volume nas bochechas', 'Desejo de maior definição facial'],
      process: 'Cirurgia realizada por via intraoral, com anestesia local, duração de 30-45 minutos.',
      recovery: 'Dieta líquida/pastosa por 3 dias, resultado final em 3-6 meses.',
      risks: 'Edema, hematomas, infecção, lesão de estruturas nobres (raro).',
      care: 'Higiene oral rigorosa, dieta adequada, evitar esforços, medicação prescrita.'
    }
  },
  // Alergias
  {
    id: 'testes',
    name: 'Testes Alérgicos',
    category: 'alergia',
    description: 'Identificação de agentes causadores de alergias respiratórias',
    icon: 'test-tube',
    details: {
      fullDescription: 'Os testes alérgicos são essenciais para identificar os agentes causadores das reações alérgicas, permitindo um tratamento mais eficaz.',
      indications: ['Rinite alérgica', 'Asma', 'Conjuntivite alérgica', 'Eczema atópico'],
      process: 'Teste cutâneo por puntura ou patch test, duração de 30-60 minutos.',
      recovery: 'Sem tempo de recuperação, resultados imediatos ou em 48-72h.',
      risks: 'Reações locais leves, raramente reações sistêmicas.',
      care: 'Não coçar o local do teste, evitar anti-histamínicos antes do exame.'
    }
  },
  {
    id: 'imunoterapia',
    name: 'Imunoterapia',
    category: 'alergia',
    description: 'Vacinas para alergia com mais de 70% de eficácia',
    icon: 'shield',
    details: {
      fullDescription: 'A imunoterapia é um tratamento que utiliza vacinas específicas para dessensibilizar o organismo aos alérgenos, apresentando alta eficácia.',
      indications: ['Rinite alérgica persistente', 'Asma alérgica', 'Alergia a ácaros e pólens', 'Falha do tratamento medicamentoso'],
      process: 'Aplicação de vacinas específicas, inicialmente semanal, depois mensal.',
      recovery: 'Tratamento de longo prazo (3-5 anos), melhora gradual dos sintomas.',
      risks: 'Reações locais, raramente reações sistêmicas.',
      care: 'Aguardar 30 minutos após aplicação, relatar qualquer reação, manter regularidade.'
    }
  },
  {
    id: 'rinite',
    name: 'Rinite Alérgica',
    category: 'alergia',
    description: 'Tratamento completo da rinite alérgica e seus sintomas',
    icon: 'wind',
    details: {
      fullDescription: 'O tratamento da rinite alérgica envolve medidas ambientais, medicamentosas e imunoterapia quando indicada, proporcionando alívio dos sintomas.',
      indications: ['Espirros frequentes', 'Congestão nasal', 'Coriza', 'Coceira nasal e ocular'],
      process: 'Avaliação completa, testes alérgicos, prescrição de tratamento personalizado.',
      recovery: 'Melhora dos sintomas em dias/semanas, tratamento de manutenção.',
      risks: 'Efeitos colaterais dos medicamentos (sonolência, ressecamento).',
      care: 'Controle ambiental, uso regular da medicação, evitar alérgenos identificados.'
    }
  }
];

export const getCategoryColor = (category: Procedure['category']) => {
  const colors = {
    otorrino: 'bg-vibrant-turquoise',
    cirurgia: 'bg-soft-blue-green',
    estetica: 'bg-light-blue-pastel',
    alergia: 'bg-light-bluish-gray'
  };
  return colors[category];
};

export const getCategoryName = (category: Procedure['category']) => {
  const names = {
    otorrino: 'Otorrinolaringologia',
    cirurgia: 'Cirurgia Plástica Facial',
    estetica: 'Medicina Estética',
    alergia: 'Alergias'
  };
  return names[category];
};
