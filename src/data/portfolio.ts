export interface NavItem {
  id: string
  label: string
}

export interface HeroData {
  initials: string
  name: string
  subtitle: string
  identification: string
  presentation: string
  githubUrl: string
}

export interface ExperienceItem {
  id: string
  institution: string
  role: string
  badgeType: 'Estagiário' | 'Bolsista' | 'Editor'
  period: string
  bullets: string[]
}

export interface TechCategory {
  title: string
  items: string[]
}

export interface RepositoryItem {
  name: string
  url: string
  description: string
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
}

export interface NonDegreeStudy {
  course: string
  institution: string
}

export interface ResearchItem {
  id: string
  title: string
  period?: string
  bullets?: string[]
  note?: string
}

export interface LanguageItem {
  language: string
  description: string
}

export interface ContactData {
  location: string
  institutionalEmail: string
  personalEmail: string
  githubUrl: string
  linkedinUrl: string
  lattesUrl: string
  citationName: string
  lattesId: string
}

export interface PortfolioData {
  pageTitle: string
  navItems: NavItem[]
  hero: HeroData
  about: string
  experiences: ExperienceItem[]
  techCategories: TechCategory[]
  githubRepositories: RepositoryItem[]
  education: {
    primary: EducationItem[]
    nonCompleted: NonDegreeStudy[]
    complementary: string[]
  }
  researchAndExtension: ResearchItem[]
  languages: LanguageItem[]
  contact: ContactData
}

export const portfolioData: PortfolioData = {
  pageTitle: 'Lucas Alves Pereira | Direito, Pesquisa e Tecnologia',
  navItems: [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'tecnologia', label: 'Tecnologia' },
    { id: 'formacao', label: 'Formação' },
    { id: 'pesquisa-e-extensao', label: 'Pesquisa e Extensão' },
    { id: 'contato', label: 'Contato' },
  ],
  hero: {
    initials: 'LAP',
    name: 'Lucas Alves Pereira',
    subtitle: 'Direito, pesquisa e tecnologia.',
    identification:
      'Bacharel em Direito pela UFPE | Experiência jurídica e informática — Recife, Pernambuco, Brasil',
    presentation:
      'Bacharel em Direito pela Universidade Federal de Pernambuco, com experiência em instituições públicas, pesquisa e extensão universitária, suporte em informática e utilização de sistemas jurídicos.',
    githubUrl: 'https://github.com/luscaalvespereira',
  },
  about:
    'Sou Lucas Alves Pereira, graduado em Direito pela Universidade Federal de Pernambuco, na Faculdade de Direito do Recife, em 2026. Minha trajetória inclui estágios no Ministério Público de Pernambuco, na Procuradoria Geral do Estado, na Defensoria Pública e na Prefeitura do Recife, com atividades de pesquisa, redação jurídica, organização documental e acompanhamento processual. Na UFPE, também atuei em monitorias, projetos de extensão, adaptação de materiais acessíveis e suporte no Laboratório de Informática da Faculdade de Direito do Recife. Essas experiências aproximam minha formação jurídica do uso de ferramentas digitais e da organização da informação.',
  experiences: [
    {
      id: 'mppe',
      institution: 'Ministério Público de Pernambuco',
      role: 'Estagiário',
      badgeType: 'Estagiário',
      period: '2025–2026',
      bullets: [
        'Atuação na Central de Inquéritos da Capital, junto à 53ª Promotoria de Justiça Criminal',
        'Assessoria técnico-jurídica sob supervisão',
        'Apoio à análise de inquéritos policiais e à elaboração de peças processuais',
      ],
    },
    {
      id: 'pge-pe',
      institution: 'Procuradoria Geral do Estado de Pernambuco',
      role: 'Estagiário',
      badgeType: 'Estagiário',
      period: '2023–2025',
      bullets: [
        'Suporte técnico-jurídico',
        'Utilização do sistema SAJ Procuradorias',
        'Gestão administrativa e acompanhamento de processos',
        'Apoio ao contencioso cível e ao processamento de Requisições de Pequeno Valor',
      ],
    },
    {
      id: 'lab-info-fdr',
      institution: 'Laboratório de Informática da FDR/UFPE',
      role: 'Bolsista ProMulti',
      badgeType: 'Bolsista',
      period: '2023–2025',
      bullets: [
        'Suporte administrativo e técnico',
        'Orientação a estudantes na utilização dos equipamentos',
        'Configuração de acessos à rede',
        'Apoio à gestão das ferramentas de informática do laboratório',
      ],
    },
    {
      id: 'dp-pe',
      institution: 'Defensoria Pública de Pernambuco',
      role: 'Estagiário voluntário',
      badgeType: 'Estagiário',
      period: '2023',
      bullets: [
        'Atuação no Núcleo da Fazenda Pública da Capital',
        'Atendimento e escuta de cidadãos',
        'Apoio à redução a termo de demandas',
        'Organização documental e utilização do sistema SOLAR',
        'Suporte à instrução probatória e à estruturação inicial de litígios, sob supervisão',
      ],
    },
    {
      id: 'bib-fdr',
      institution: 'Biblioteca Setorial da Faculdade de Direito do Recife/UFPE',
      role: 'Bolsista de apoio acadêmico',
      badgeType: 'Bolsista',
      period: '2022',
      bullets: [
        'Atuação vinculada ao Núcleo de Acessibilidade',
        'Produção e adaptação de textos, livros, capítulos e artigos em formatos acessíveis',
        'Utilização do ABBYY FineReader PDF',
        'Edição de materiais para o acervo digital da Rede Brasileira de Estudos e Conteúdos Adaptados — REBECA',
      ],
    },
    {
      id: 'pref-recife',
      institution:
        'Prefeitura do Recife — Secretaria de Infraestrutura e Habitação, Gerência Geral de Administração e Finanças',
      role: 'Estagiário',
      badgeType: 'Estagiário',
      period: '2022',
      bullets: [
        'Apoio à redação de ofícios',
        'Acompanhamento de processos judiciais e administrativos',
        'Organização de documentos e arquivos',
        'Apoio à verificação de trâmites de licitações, contratações públicas e revisões administrativas',
      ],
    },
    {
      id: 'lab-oceanografia',
      institution: 'Laboratório de Oceanografia Geológica da UFPE',
      role: 'Estagiário',
      badgeType: 'Estagiário',
      period: '2014–2017',
      bullets: ['Apoio à pesquisa de doutorado em Oceanografia de Silvio Eduardo Matos Martins'],
    },
    {
      id: 'revista-to',
      institution: 'Revista Tropical Oceanography/UFPE',
      role: 'Editor e auxiliar de atualização de publicações',
      badgeType: 'Editor',
      period: '2012–2014',
      bullets: [
        'Apoio editorial e atualização de publicações da revista',
        'Atuação junto ao professor José Zanon de Oliveira Passavante',
      ],
    },
  ],
  techCategories: [
    {
      title: 'Sistemas jurídicos',
      items: ['PJe', 'SAJ', 'SAJ Procuradorias', 'SOLAR'],
    },
    {
      title: 'Ferramentas digitais',
      items: ['Microsoft Office', 'Canva', 'WordPress', 'ABBYY FineReader PDF'],
    },
    {
      title: 'Experiência em informática',
      items: [
        'Suporte a usuários',
        'Orientação na utilização de equipamentos',
        'Configuração de acessos à rede',
        'Apoio à gestão de ferramentas de informática',
        'Organização e cruzamento de informações',
        'Produção e adaptação de materiais digitais acessíveis',
      ],
    },
    {
      title: 'Competências jurídicas',
      items: [
        'Pesquisa jurídica',
        'Redação jurídica',
        'Documentos jurídicos',
        'Acompanhamento processual',
        'Organização documental',
      ],
    },
  ],
  githubRepositories: [
    {
      name: 'Antigravidade-Bridge',
      url: 'https://github.com/luscaalvespereira/Antigravidade-Bridge',
      description:
        'Extensão de navegador (Chrome MV3) com scripts PowerShell para sincronização via API do GitHub, conforme README público do projeto.',
    },
    {
      name: 'PedagogoVision',
      url: 'https://github.com/luscaalvespereira/PedagogoVision',
      description:
        'Aplicação web em Python/FastAPI descrita no README público como estúdio multimodal de transmutação de fotos de tarefas em documentos didáticos de leitura. Licença MIT.',
    },
    {
      name: 'nextjs-ai-chatbot',
      url: 'https://github.com/luscaalvespereira/nextjs-ai-chatbot',
      description:
        'Instância do template Chat SDK (Next.js e AI SDK), criada a partir do modelo da Vercel, conforme metadados públicos do repositório.',
    },
  ],
  education: {
    primary: [
      {
        degree: 'Bacharelado em Direito',
        institution: 'Universidade Federal de Pernambuco — Faculdade de Direito do Recife',
        period: '2020–2026',
      },
      {
        degree: 'Ensino Médio',
        institution: 'Colégio da Polícia Militar de Pernambuco',
        period: '2009–2011',
      },
    ],
    nonCompleted: [
      {
        course: 'Oceanografia',
        institution: 'Universidade Federal de Pernambuco',
      },
      {
        course: 'Gestão Ambiental',
        institution: 'Instituto Federal de Pernambuco',
      },
    ],
    complementary: [
      'Aula Magna: Constituição e Povos Originários',
      'Seminário: Diálogos interétnicos e interdisciplinares — visibilidade indígena nos campos da Antropologia e do Direito',
      'Seminário de Crítica Marxista da Faculdade de Direito do Recife',
      'Bell Hooks e a teoria feminista, com Kilza Pascoal',
      'Escrita Científica com Inteligência Artificial',
    ],
  },
  researchAndExtension: [
    {
      id: 'const-2',
      title: 'Monitor de Direito Constitucional 2 — UFPE',
      period: '2023–2024',
    },
    {
      id: 'teoria-const',
      title: 'Monitor de Teoria da Constituição — UFPE',
      period: '2022–2023',
    },
    {
      id: 'najup',
      title: 'NAJUP — Núcleo de Assessoria Jurídica Popular da FDR/UFPE',
      period: '2023–2026',
      bullets: [
        'Atendimento jurídico popular',
        'Acompanhamento de campo em comunidades periféricas e movimentos sociais',
        'Mapeamento de conflitos',
        'Atividades relacionadas à defesa de direitos territoriais e à estruturação de litígios comunitários',
      ],
    },
    {
      id: 'asidh',
      title: 'aSIDH — Acesso ao Sistema Interamericano de Direitos Humanos',
      period: '2022–2026',
      bullets: ['Participação como membro em projeto de extensão da UFPE.'],
    },
    {
      id: 'labadi',
      title: 'LABADI — Liga Acadêmica Brasileira de Antropologia e Direito Indígena',
      period: '2022–2026',
      bullets: ['Participação como membro e atuação na coordenação, conforme currículo fornecido.'],
    },
    {
      id: 'menino-crescer',
      title: 'Projeto Menino Crescer',
      period: '2021–2026',
      bullets: ['Experiência como assistente jurídico.'],
    },
    {
      id: 'oab-pe',
      title: 'OAB Pernambuco — Comitê de Relações Estudantis',
      bullets: ['Membro colaborador desde outubro de 2022, conforme perfil fornecido.'],
      note: 'Não afirma continuidade atual do vínculo.',
    },
    {
      id: 'saj-presidencia',
      title:
        'Programa Vivências SAJ 2025 — Secretaria de Assuntos Jurídicos da Presidência da República',
      period: 'Maio de 2025',
      bullets: [
        'Participação em Brasília, em maio de 2025.',
        'Atividades institucionais e formativas sobre atuação jurídica no Poder Executivo federal, políticas públicas, assessoramento jurídico governamental, acesso à justiça e direitos fundamentais.',
      ],
    },
  ],
  languages: [
    {
      language: 'Português',
      description: 'compreende, fala, lê e escreve bem.',
    },
    {
      language: 'Inglês',
      description: 'compreende, fala, lê e escreve pouco.',
    },
    {
      language: 'Espanhol',
      description: 'compreensão e leitura razoáveis; fala e escrita limitadas.',
    },
  ],
  contact: {
    location: 'Recife, Pernambuco, Brasil',
    institutionalEmail: 'lucas.alvespereira@ufpe.br',
    personalEmail: 'lucas.alves.pereira.icm.lp@gmail.com',
    githubUrl: 'https://github.com/luscaalvespereira',
    linkedinUrl: 'https://www.linkedin.com/in/luscapereiraalves',
    lattesUrl: 'http://lattes.cnpq.br/8090095802844326',
    citationName: 'PEREIRA, L. A.',
    lattesId: '8090095802844326',
  },
}
