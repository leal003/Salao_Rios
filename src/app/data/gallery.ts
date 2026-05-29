export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'image',
    alt: 'Salão Rios - Atendimento',
    category: 'ambiente',
  },
  {
    id: '2',
    src: 'image-1',
    alt: 'Salão Rios - Serviços',
    category: 'servicos',
  },
  {
    id: '3',
    src: 'image-2',
    alt: 'Salão Rios - Equipe',
    category: 'equipe',
  },
  {
    id: '4',
    src: 'image-3',
    alt: 'Salão Rios - Instalações',
    category: 'ambiente',
  },
  {
    id: '5',
    src: 'image-4',
    alt: 'Salão Rios - Cortes',
    category: 'servicos',
  },
  {
    id: '6',
    src: 'image-5',
    alt: 'Salão Rios - Atendimento profissional',
    category: 'servicos',
  },
  {
    id: '7',
    src: 'image-6',
    alt: 'Salão Rios - Ambiente acolhedor',
    category: 'ambiente',
  },
];
