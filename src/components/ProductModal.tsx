import { Product } from '../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { ShoppingCart, Heart, Star, Truck, ShieldCheck } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, size: number) => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden rounded-3xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto bg-muted">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-primary text-white border-none">Novo</Badge>}
              {product.isSale && <Badge variant="destructive" className="border-none">Oferta</Badge>}
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col gap-6">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">(48 avaliações)</span>
              </div>
              <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {product.description}
              </p>
            </DialogHeader>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">
                R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              {product.isSale && (
                <span className="text-lg text-muted-foreground line-through">
                  R$ {(product.price * 1.2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Escolha o Tamanho</span>
                <button className="text-xs text-primary underline">Guia de Tamanhos</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-sm font-medium transition-all ${
                      selectedSize === size 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => selectedSize && onAddToCart(product, selectedSize)}
                disabled={!selectedSize}
                className="flex-1 rounded-full bg-primary hover:bg-primary/90 h-12 text-lg gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Adicionar ao Carrinho
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-primary text-primary">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <div className="text-[10px] leading-tight">
                  <p className="font-bold">Frete Grátis</p>
                  <p className="text-muted-foreground">Acima de R$ 199</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div className="text-[10px] leading-tight">
                  <p className="font-bold">Compra Segura</p>
                  <p className="text-muted-foreground">Troca fácil em 30 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
