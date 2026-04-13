import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sandália Princesa Encantada',
    description: 'Sandália delicada com detalhes em pérolas e laço, perfeita para festas.',
    price: 89.90,
    category: 'Sandálias',
    sizes: [20, 21, 22, 23, 24, 25],
    images: ['https://picsum.photos/seed/sandalia1/600/600'],
    isNew: true
  },
  {
    id: '2',
    name: 'Tênis Estrela Brilhante',
    description: 'Tênis confortável com luzes de LED e acabamento em glitter.',
    price: 129.90,
    category: 'Tênis',
    sizes: [22, 23, 24, 25, 26, 27, 28],
    images: ['https://picsum.photos/seed/tenis1/600/600'],
    isNew: true
  },
  {
    id: '3',
    name: 'Bota Inverno Mágico',
    description: 'Bota forrada com pelúcia para manter os pezinhos aquecidos no inverno.',
    price: 159.90,
    category: 'Botinhas',
    sizes: [24, 25, 26, 27, 28, 29, 30],
    images: ['https://picsum.photos/seed/bota1/600/600']
  },
  {
    id: '4',
    name: 'Sandália Verão Colorido',
    description: 'Sandália leve e arejada com cores vibrantes para o dia a dia.',
    price: 59.90,
    category: 'Promoções',
    sizes: [18, 19, 20, 21, 22],
    images: ['https://picsum.photos/seed/sandalia2/600/600'],
    isSale: true
  },
  {
    id: '5',
    name: 'Tênis Casual Rosa Pastel',
    description: 'Tênis versátil para todas as ocasiões com fecho em velcro.',
    price: 99.90,
    category: 'Tênis',
    sizes: [20, 21, 22, 23, 24, 25, 26],
    images: ['https://picsum.photos/seed/tenis2/600/600']
  },
  {
    id: '6',
    name: 'Sapatilha Bailarina Real',
    description: 'Sapatilha clássica com fita de cetim para amarrar no tornozelo.',
    price: 79.90,
    category: 'Sandálias',
    sizes: [22, 23, 24, 25, 26],
    images: ['https://picsum.photos/seed/sapatilha1/600/600']
  },
  {
    id: '7',
    name: 'Bota Galocha Arco-Íris',
    description: 'Galocha impermeável para brincar na chuva com muito estilo.',
    price: 119.90,
    category: 'Botinhas',
    sizes: [24, 25, 26, 27, 28],
    images: ['https://picsum.photos/seed/galocha1/600/600']
  },
  {
    id: '8',
    name: 'Sandália Flor de Cerejeira',
    description: 'Sandália com apliques de flores em couro sintético.',
    price: 69.90,
    category: 'Promoções',
    sizes: [20, 21, 22, 23, 24],
    images: ['https://picsum.photos/seed/sandalia3/600/600'],
    isSale: true
  }
];
