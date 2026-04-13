import { CartItem } from '../types';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from './ui/sheet';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, size: number, delta: number) => void;
  onRemoveItem: (id: string, size: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col gap-0 p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[400px] text-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <div>
                <p className="text-lg font-medium">Seu carrinho está vazio</p>
                <p className="text-sm text-muted-foreground">Que tal adicionar alguns calçados lindos?</p>
              </div>
              <Button onClick={onClose} variant="outline" className="rounded-full mt-2">
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                  <div className="h-24 w-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">Tamanho: {item.selectedSize}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border rounded-full px-2 py-1 gap-3">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                          disabled={item.quantity <= 1}
                          className="hover:text-primary disabled:opacity-30"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                          className="hover:text-primary"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-sm">
                          R$ {(item.price * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                        <button 
                          onClick={() => onRemoveItem(item.id, item.selectedSize)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <SheetFooter className="p-6 border-t flex-col gap-4 sm:flex-col">
            <div className="flex items-center justify-between w-full">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-xl font-bold">
                R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Frete e impostos calculados na finalização da compra.
            </p>
            <Button className="w-full rounded-full bg-primary hover:bg-primary/90 py-6 text-lg">
              Finalizar Compra
            </Button>
            <Button variant="ghost" onClick={onClose} className="w-full">
              Continuar Comprando
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
