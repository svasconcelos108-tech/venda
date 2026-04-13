/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import CategoryFilter from './components/CategoryFilter';
import Footer from './components/Footer';
import { products } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'Todos') return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (product: Product, size?: number) => {
    if (!size) {
      setSelectedProduct(product);
      setIsProductModalOpen(true);
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });

    toast.success(`${product.name} adicionado ao carrinho!`, {
      description: `Tamanho: ${size}`,
      action: {
        label: 'Ver Carrinho',
        onClick: () => setIsCartOpen(true),
      },
    });

    setIsProductModalOpen(false);
  };

  const handleUpdateQuantity = (id: string, size: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string, size: number) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.selectedSize === size)));
    toast.info('Item removido do carrinho');
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="flex-1">
        <Hero />
        
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nossos Calçados</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore nossa seleção cuidadosamente escolhida para garantir o melhor para sua pequena princesa.
            </p>
          </div>

          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard 
                  product={product} 
                  onAddToCart={(p) => handleAddToCart(p)} 
                />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">Nenhum produto encontrado nesta categoria.</p>
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="bg-secondary/20 py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-bold">Entrega Rápida</h3>
              <p className="text-sm text-muted-foreground">Enviamos para todo o Brasil com carinho e agilidade.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-2xl">💖</span>
              </div>
              <h3 className="font-bold">Qualidade Premium</h3>
              <p className="text-sm text-muted-foreground">Materiais selecionados para o máximo conforto.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-bold">Troca Fácil</h3>
              <p className="text-sm text-muted-foreground">Não serviu? A primeira troca é por nossa conta.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <ProductModal 
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <Toaster position="top-center" richColors />
    </div>
  );
}
