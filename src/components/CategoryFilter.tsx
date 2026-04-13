import { Button } from './ui/button';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
      <Button
        variant={selectedCategory === 'Todos' ? 'default' : 'outline'}
        onClick={() => onSelectCategory('Todos')}
        className={`rounded-full px-6 ${selectedCategory === 'Todos' ? 'bg-primary hover:bg-primary/90' : 'border-primary/20 text-muted-foreground hover:text-primary hover:border-primary'}`}
      >
        Todos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onSelectCategory(category)}
          className={`rounded-full px-6 ${
            selectedCategory === category 
              ? (category === 'Promoções' ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90')
              : 'border-primary/20 text-muted-foreground hover:text-primary hover:border-primary'
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
