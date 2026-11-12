// Todo o conteúdo editável do site fica aqui. Não há CMS: alterações são feitas neste arquivo.
export interface Img { src: string; width: number; height: number; alt: string }
export interface GalleryItem { id: string; src: string; width: number; height: number; alt: string; category?: string; badge?: string; caption?: string }

export const site = {
  name: 'Ana Rëynaud',
  title: 'Ana Rëynaud — Nail designer e cursos em Joinville',
  description: 'Serviços de unhas e cursos individuais com Ana Rëynaud, em Joinville — SC. Atendimento com hora marcada.',
  ogImage: '/images/hero/portrait.jpg',
};

export const contact = {
  whatsappNumber: '5547988200969',
  whatsappDisplay: '+55 47 98820-0969',
  instagramHandle: 'eusouanadasunhas',
  instagramUrl: 'https://instagram.com/eusouanadasunhas',
  address: 'Rua Vicente Leporace, 55, Fátima, Joinville — SC',
  city: 'Joinville — SC',
  hours: 'Atendimento mediante hora marcada',
};

// Mensagens iniciais aprovadas. O visitante revisa e envia pelo WhatsApp.
export const messages = {
  services: 'Olá, Ana! Vi seu site e gostaria de saber mais sobre os serviços de unhas e consultar valores e disponibilidade.',
  course: 'Olá, Ana! Conheci seu curso pelo site e gostaria de saber mais sobre o conteúdo, as próximas disponibilidades e as condições de pagamento.',
  general: 'Olá, Ana! Encontrei seu contato pelo site e gostaria de tirar uma dúvida.',
  service: (name: string) => `Olá, Ana! Vi seu site e tenho interesse em ${name.toLowerCase()}. Você poderia me informar os valores e a disponibilidade?`,
  courseNamed: (name: string) => `Olá, Ana! Conheci seu curso pelo site e tenho interesse no ${name}. Gostaria de saber mais sobre o conteúdo, as próximas disponibilidades e as condições de pagamento.`,
};

export const nav = [
  { label: 'Início', href: '#inicio' }, { label: 'Serviços', href: '#servicos' }, { label: 'Curso', href: '#curso' },
  { label: 'Sobre', href: '#sobre' }, { label: 'Contato', href: '#contato' },
];

export const hero = {
  eyebrow: 'Ana Rëynaud · Nail designer · Joinville — SC',
  title: 'Beleza nos detalhes. Técnica em cada gesto.',
  text: 'Cuidados para suas unhas e formação para quem quer desenvolver suas habilidades.',
  portrait: {
  "src": "/images/hero/portrait.jpg",
  "width": 792,
  "height": 1100,
  "alt": "Retrato em preto e branco de Ana Rëynaud, com batom vermelho, sentada de colete e camisa branca"
} as Img,
  nails: {
  "src": "/images/hero/nails-red.webp",
  "width": 1000,
  "height": 750,
  "alt": "Unhas amendoadas em vermelho brilhante, em foto preto e branco com destaque na cor"
} as Img,
};

export const paths = [
  { title: 'Serviços de unhas', text: 'Atendimento com hora marcada, pelo WhatsApp.', href: '#servicos', cta: 'Ver serviços', image: {
  "src": "/images/gallery/a1.jpg",
  "alt": "Unhas amendoadas com acabamento em cinza metálico"
} },
  { title: 'Cursos individuais', text: 'Aprenda técnicas com acompanhamento da Ana e certificado de conclusão.', href: '#curso', cta: 'Ver os cursos', image: {
  "src": "/images/courses/certificate.jpg",
  "alt": "Certificado de conclusão de curso assinado por Ana Rëynaud"
}, contain: true },
];

export const galleryFilters = [
  { id: 'todos', label: 'Todos' }, { id: 'cutilagem', label: 'Cutilagem' }, { id: 'banho', label: 'Banho de gel' },
  { id: 'podal', label: 'Podal russo' }, { id: 'alongamento', label: 'Alongamento' }, { id: 'manutencao', label: 'Manutenção' },
];

// Seleção provisória: confirmar com a Ana quais fotos são alongamento e quais são manutenção.
export const services = [
  {
    "id": "cutilagem",
    "name": "Cutilagem",
    "category": "cutilagem",
    "cover": "/images/gallery/cut.jpg",
    "coverAlt": "Cutilagem"
  },
  {
    "id": "banho",
    "name": "Banho de gel com esmaltação em gel",
    "category": "banho",
    "cover": "/images/gallery/g1.jpg",
    "coverAlt": "Banho de gel com esmaltação em gel"
  },
  {
    "id": "podal",
    "name": "Podal russo com esmaltação em gel",
    "category": "podal",
    "cover": "/images/gallery/p1.jpg",
    "coverAlt": "Podal russo com esmaltação em gel"
  },
  {
    "id": "alongamento",
    "name": "Alongamento",
    "category": "alongamento",
    "cover": "/images/gallery/a1.jpg",
    "coverAlt": "Alongamento"
  },
  {
    "id": "manutencao",
    "name": "Manutenção",
    "category": "manutencao",
    "cover": "/images/gallery/m8.jpg",
    "coverAlt": "Manutenção"
  }
];

export const gallery: GalleryItem[] = [
  {
    "id": "cuta",
    "src": "/images/gallery/cuta.jpg",
    "width": 508,
    "height": 900,
    "alt": "Unha natural antes da cutilagem",
    "category": "cutilagem",
    "badge": "Antes"
  },
  {
    "id": "cutd",
    "src": "/images/gallery/cutd.jpg",
    "width": 508,
    "height": 900,
    "alt": "Unha após cutilagem e esmaltação em gel",
    "category": "cutilagem",
    "badge": "Depois"
  },
  {
    "id": "cut",
    "src": "/images/gallery/cut.jpg",
    "width": 900,
    "height": 508,
    "alt": "Unhas com gel rosado e cutículas alinhadas",
    "category": "cutilagem"
  },
  {
    "id": "g1",
    "src": "/images/gallery/g1.jpg",
    "width": 675,
    "height": 900,
    "alt": "Unhas azul cobalto com efeito perolado",
    "category": "banho"
  },
  {
    "id": "g2",
    "src": "/images/gallery/g2.jpg",
    "width": 675,
    "height": 900,
    "alt": "Unhas vermelhas com brilho",
    "category": "banho"
  },
  {
    "id": "g3",
    "src": "/images/gallery/g3.jpg",
    "width": 675,
    "height": 900,
    "alt": "Unhas em rosa vibrante",
    "category": "banho"
  },
  {
    "id": "g4",
    "src": "/images/gallery/g4.jpg",
    "width": 675,
    "height": 900,
    "alt": "Unhas rosa nude com glitter prateado",
    "category": "banho"
  },
  {
    "id": "p1",
    "src": "/images/gallery/p1.jpg",
    "width": 675,
    "height": 900,
    "alt": "Pés com esmaltação marrom chocolate",
    "category": "podal"
  },
  {
    "id": "p2",
    "src": "/images/gallery/p2.jpg",
    "width": 675,
    "height": 900,
    "alt": "Pés com francesinha e adesivo de rosa",
    "category": "podal"
  },
  {
    "id": "p3",
    "src": "/images/gallery/p3.jpg",
    "width": 675,
    "height": 900,
    "alt": "Pés com francesinha larga",
    "category": "podal"
  },
  {
    "id": "a1",
    "src": "/images/gallery/a1.jpg",
    "width": 675,
    "height": 900,
    "alt": "Alongamento amendoado cinza com estampa de onça",
    "category": "alongamento"
  },
  {
    "id": "a3",
    "src": "/images/gallery/a3.jpg",
    "width": 506,
    "height": 900,
    "alt": "Alongamento longo cinza",
    "category": "alongamento"
  },
  {
    "id": "a5",
    "src": "/images/gallery/a5.jpg",
    "width": 675,
    "height": 900,
    "alt": "Alongamento azul com acento dourado",
    "category": "alongamento"
  },
  {
    "id": "a6",
    "src": "/images/gallery/a6.jpg",
    "width": 506,
    "height": 900,
    "alt": "Alongamento rosa e cinza com ponta de onça",
    "category": "alongamento"
  },
  {
    "id": "a10",
    "src": "/images/gallery/a10.jpg",
    "width": 675,
    "height": 900,
    "alt": "Alongamento nude com detalhe prateado",
    "category": "alongamento"
  },
  {
    "id": "m8",
    "src": "/images/gallery/m8.jpg",
    "width": 675,
    "height": 900,
    "alt": "Francesinha com cristais",
    "category": "manutencao"
  },
  {
    "id": "m11",
    "src": "/images/gallery/m11.jpg",
    "width": 900,
    "height": 661,
    "alt": "Francesinha larga em unhas quadradas",
    "category": "manutencao"
  },
  {
    "id": "m12",
    "src": "/images/gallery/m12.jpg",
    "width": 508,
    "height": 900,
    "alt": "Francesinha com folha e glitter",
    "category": "manutencao"
  },
  {
    "id": "m7",
    "src": "/images/gallery/m7.jpg",
    "width": 900,
    "height": 534,
    "alt": "Detalhe de francesinha em close",
    "category": "manutencao"
  }
];

export const courseFormat = {
  title: 'Curso Mold F1',
  steps: [
    { label: '1º dia', text: 'Um dia inteiro para você aprender a técnica do Mold F1.' },
    { label: '15 dias depois', text: 'Retorno de meio dia para tirar dúvidas e aprofundar o aprendizado.' },
  ],
  pillars: [
    { title: 'Apostila online', text: 'Material de apoio' }, { title: 'Brindes', text: 'Para somar ao seu trabalho' },
    { title: 'Certificado', text: 'De conclusão do curso' }, { title: 'Suporte pós-curso', text: 'Acompanhamento pelo WhatsApp' },
  ],
  learn: ['Cutilagem perfeita', 'Escolha correta do mold', 'Preparação da lâmina', 'Acoplagem correta', 'Lixamento técnico', 'Acabamento slim', 'Controle de produtos', 'Esmaltação perfeita'],
  bonus: 'Ensino a fazer fotos incríveis, para valorizar seu trabalho nas redes sociais.',
};

// Carga horária = registro dos certificados, não a duração total do acompanhamento. Sem preços (consultar pelo WhatsApp).
export const courses = [
  { name: 'Design de sobrancelhas com henna', hours: 'Carga horária registrada no certificado: 5 horas' },
  { name: 'Mold F1, cutilagem, esmaltação em gel e fotos', hours: 'Carga horária registrada no certificado: 8 horas' },
  { name: 'Curso podal russo', hours: null as string | null },
];

export const courseGallery: GalleryItem[] = [
  {
    "src": "/images/courses/c_gis.jpg",
    "width": 900,
    "height": 809,
    "alt": "Ana Rëynaud com aluna segurando certificado",
    "caption": "Entrega de certificado",
    "id": "c_gis"
  },
  {
    "src": "/images/courses/c_kar.jpg",
    "width": 675,
    "height": 900,
    "alt": "Ana Rëynaud com aluna segurando certificado",
    "caption": "Mold F1, cutilagem, esmaltação em gel e fotos",
    "id": "c_kar"
  },
  {
    "src": "/images/courses/c_mon.jpg",
    "width": 675,
    "height": 900,
    "alt": "Ana Rëynaud com aluna segurando certificado",
    "caption": "Entrega de certificado",
    "id": "c_mon"
  },
  {
    "src": "/images/courses/c_and.jpg",
    "width": 674,
    "height": 900,
    "alt": "Ana Rëynaud com aluna segurando certificado",
    "caption": "Entrega de certificado",
    "id": "c_and"
  },
  {
    "src": "/images/courses/c_mar.jpg",
    "width": 675,
    "height": 900,
    "alt": "Aluna segurando certificado de design de sobrancelha com henna",
    "caption": "Design de sobrancelha com henna",
    "id": "c_mar"
  },
  {
    "src": "/images/courses/aula1.jpg",
    "width": 675,
    "height": 900,
    "alt": "Aluna praticando cutilagem com lixadeira",
    "caption": "Aula prática",
    "id": "aula1"
  },
  {
    "src": "/images/courses/aula2.jpg",
    "width": 675,
    "height": 900,
    "alt": "Aluna praticando em aula",
    "caption": "Aula prática",
    "id": "aula2"
  },
  {
    "src": "/images/courses/res.jpg",
    "width": 675,
    "height": 900,
    "alt": "Resultado de unhas de uma aluna",
    "caption": "Resultado de aluna",
    "id": "res"
  }
];

export const about = {
  title: 'Sobre Ana Rëynaud',
  image: {
  "src": "/images/about/ana-portrait.jpg",
  "width": 663,
  "height": 830,
  "alt": "Retrato de Ana Rëynaud em terno marrom, com luz e sombra na parede"
} as Img,
  paragraphs: [
    'Sou Ana Rëynaud, esposa, mãe de três meninas e apaixonada pelo universo da beleza.',
    'Durante quase dez anos, trabalhei como cozinheira, até descobrir nas unhas uma área em que realmente me realizo profissionalmente. Desde 2023, venho construindo minha trajetória como nail designer, sempre buscando aperfeiçoar minhas técnicas e oferecer uma experiência especial a cada pessoa que passa pelo meu espaço.',
    'Além dos atendimentos, também compartilho meus conhecimentos por meio de cursos individuais, acompanhando minhas alunas durante o aprendizado e oferecendo suporte para que continuem evoluindo depois das aulas.',
    'Acredito que aprender, aperfeiçoar-se e compartilhar conhecimento faz parte de uma jornada contínua — e é isso que procuro levar para o meu trabalho todos os dias.',
  ],
};

// Mensagens reais recebidas, sem nomes (autorização confirmada pelo responsável). Ajustes apenas de português.
export const testimonials: string[] = [
  "Ana, você é além de dinheiro, você é algo raro, e sou muito grata por isso. Muito grata a Deus por ter te conhecido.",
  "Mesmo depois do curso você sempre pensa em como poder ajudar. Sou muito grata por ter escolhido você como minha professora.",
  "Fazer curso vale muito a pena com uma boa profissional. Vi o quanto você se esforçou pra me ajudar a tirar minhas dúvidas, e eu, disposta a ouvir, absorvi tudo aquilo.",
  "Nossa, Ana, pode ter certeza que irei fazer mais cursos com você."
];
