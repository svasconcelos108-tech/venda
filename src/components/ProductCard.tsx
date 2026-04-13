import { Product } from '../types';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl group">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-primary hover:bg-primary text-white border-none">Novo</Badge>
            )}
            {product.isSale && (
              <Badge variant="destructive" className="border-none">Oferta</Badge>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="h-4 w-4 text-primary" />
          </Button>
        </div>
        
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-lg font-bold text-foreground">
              R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            onClick={() => onAddToCart(product)}
            className="w-full rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Adicionar
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
