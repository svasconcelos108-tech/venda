export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Sandálias' | 'Tênis' | 'Botinhas' | 'Promoções';
  sizes: number[];
  images: string[];
  isNew?: boolean;
  isSale?: boolean;
}

export interface CartItem extends Product {
  selectedSize: number;
  quantity: number;
}
