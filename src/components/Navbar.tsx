import { ShoppingCart, Heart, Search, Menu, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#" className="text-lg font-medium hover:text-primary">Início</a>
                <a href="#" className="text-lg font-medium hover:text-primary">Sandálias</a>
                <a href="#" className="text-lg font-medium hover:text-primary">Tênis</a>
                <a href="#" className="text-lg font-medium hover:text-primary">Botinhas</a>
                <a href="#" className="text-lg font-medium text-destructive">Promoções</a>
              </nav>
            </SheetContent>
          </Sheet>
          
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary tracking-tight">Pequenas Princesas</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sandálias</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Tênis</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Botinhas</a>
          <a href="#" className="text-sm font-medium text-destructive hover:opacity-80 transition-colors">Promoções</a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center relative">
            <Input 
              placeholder="Buscar calçados..." 
              className="w-[200px] lg:w-[300px] pr-8 focus-visible:ring-primary"
            />
            <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
          </div>
          
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative" onClick={onOpenCart}>
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
