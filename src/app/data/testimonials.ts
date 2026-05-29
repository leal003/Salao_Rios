export type Testimonial = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos A.',
    text: 'Melhor salão da região! Atendimento excelente, ambiente agradável e profissionais incríveis.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Juliana R.',
    text: 'Levo meus filhos desde pequenos. Confiança, carinho e sempre saímos muito satisfeitos.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Marcos P.',
    text: 'Tradição e qualidade que a gente sente. Recomendo de olhos fechados!',
    rating: 5,
  },
];
