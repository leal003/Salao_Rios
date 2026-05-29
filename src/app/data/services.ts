export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: '1',
    title: 'Corte masculino',
    description: 'Estilos modernos e clássicos.',
    image: 'male-cut',
    icon: 'Scissors',
  },
  {
    id: '2',
    title: 'Corte feminino',
    description: 'Tendências e personalidade.',
    image: 'female-cut',
    icon: 'Sparkles',
  },
  {
    id: '3',
    title: 'Corte infantil',
    description: 'Estilo e conforto para os pequenos.',
    image: 'kids-cut',
    icon: 'Baby',
  },
  {
    id: '4',
    title: 'Barba',
    description: 'Acabamento perfeito.',
    image: 'beard',
    icon: 'User',
  },
  {
    id: '5',
    title: 'Escova',
    description: 'Brilho e movimento que realçam.',
    image: 'blow-dry',
    icon: 'Wind',
  },
  {
    id: '6',
    title: 'Hidratação',
    description: 'Cabelos saudáveis e bonitos.',
    image: 'hydration',
    icon: 'Droplets',
  },
  {
    id: '7',
    title: 'Sobrancelha',
    description: 'Detalhes que valorizam o olhar.',
    image: 'eyebrow',
    icon: 'Eye',
  },
  {
    id: '8',
    title: 'Química capilar',
    description: 'Transformação com cuidado.',
    image: 'chemical',
    icon: 'Beaker',
  },
];
