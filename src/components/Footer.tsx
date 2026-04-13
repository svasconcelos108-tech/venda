import { Instagram, Facebook, Twitter, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-primary">Pequenas Princesas</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Especialistas em calçados infantis femininos. Unimos conforto, qualidade e a delicadeza que sua princesa merece.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-foreground">Categorias</h4>
          <nav className="flex flex-col gap-2">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sandálias</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tênis</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Botinhas</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sapatilhas</a>
            <a href="#" className="text-sm text-destructive hover:opacity-80 transition-colors">Promoções</a>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-foreground">Ajuda</h4>
          <nav className="flex flex-col gap-2">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Trocas e Devoluções</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Guia de Tamanhos</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Prazos de Entrega</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Políticas de Privacidade</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Perguntas Frequentes</a>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-foreground">Contato</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p>(11) 99999-9999</p>
                <p className="text-xs">Seg a Sex, 9h às 18h</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">contato@pequenasprincesas.com.br</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">São Paulo, SP - Brasil</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground text-center md:text-left">
          © 2024 Pequenas Princesas Calçados. Todos os direitos reservados. CNPJ: 00.000.000/0000-00
        </p>
        <div className="flex items-center gap-4 grayscale opacity-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-4" />
        </div>
      </div>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </footer>
  );
}
