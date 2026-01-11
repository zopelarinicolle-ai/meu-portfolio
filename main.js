import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Play, Check, Video, MessageCircle, Instagram, Youtube, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Configuração dos Vídeos do Portfólio
  const portfolioVideos = [
    {
      id: 1,
      title: "Comercial de Moda",
      category: "Publicidade",
      thumbnail: "https://images.unsplash.com/photo-1492691523567-30730029d034?auto=format&fit=crop&q=80&w=800",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
    },
    {
      id: 2,
      title: "Evento Corporativo",
      category: "Institucional",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Documentário Curto",
      category: "Narrativo",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      title: "Reels / TikTok",
      category: "Social Media",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  // Planos de Preços
  const pricingPlans = [
    {
      name: "Avulso",
      videos: "1 Vídeo",
      price: "49,90",
      period: "por vídeo",
      features: ["Edição profissional", "Corte e Cor", "Até 1 minuto", "1 Revisão"],
      highlight: false
    },
    {
      name: "Combo Duplo",
      videos: "2 Vídeos",
      price: "94,90",
      period: "total",
      features: ["Melhor Custo-Benefício", "Legendas inclusas", "Cortes Dinâmicos", "2 Revisões"],
      highlight: true
    },
    {
      name: "Plano Mensal",
      videos: "4 Vídeos",
      price: "189,90",
      period: "por mês",
      features: ["Assessoria de conteúdo", "Prioridade na fila", "Formatos variados", "Revisões Ilimitadas"],
      highlight: false
    }
  ];

  const handleContact = (planName) => {
    const meuNumero = "5500000000000"; // Substitui pelo teu número de WhatsApp
    const message = encodeURIComponent(`Olá! Vi o teu portfólio e tenho interesse no plano: ${planName}`);
    window.open(`https://wa.me/${meuNumero}?text=${message}`, '_blank'); 
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-[#595ce9] selection:text-white">
      {/* Hero Section */}
      <header className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#595ce9]/20 via-transparent to-transparent -z-10"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-[#595ce9]/30 rounded-full bg-[#595ce9]/10 text-[#595ce9] text-sm font-medium tracking-wide">
            Disponível para novos projetos
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">
            Edição de Vídeo que <br /> Conecta e Converte.
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Especialista em criar conteúdo dinâmico para marcas e empresas que procuram impacto visual.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#portfolio" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition-all flex items-center gap-2">
              <Play size={18} fill="black" /> Ver Portfólio
            </a>
            <a href="#precos" className="bg-neutral-900 border border-neutral-800 px-8 py-3 rounded-full font-bold hover:bg-neutral-800 transition-all">
              Ver Planos
            </a>
          </div>
        </div>
      </header>

      {/* Grid de Portfólio */}
      <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Trabalhos Recentes</h2>
          <div className="h-1 w-20 bg-[#595ce9] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioVideos.map((video) => (
            <div 
              key={video.id} 
              className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-[#595ce9]/50 transition-all cursor-pointer"
              onClick={() => setActiveVideo(video.embedUrl)}
            >
              <div className="aspect-[9/16] relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <Play size={24} fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 w-full">
                <span className="text-[#595ce9] text-[10px] font-bold uppercase tracking-tighter">{video.category}</span>
                <h3 className="font-bold text-lg leading-tight">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal do Player de Vídeo */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
            <iframe 
              src={activeVideo} 
              className="w-full h-full" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Secção de Preços */}
      <section id="precos" className="py-20 px-6 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Escolha o seu Combo</h2>
            <p className="text-neutral-400">Opções flexíveis para o seu volume de produção.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-3xl border transition-all ${
                  plan.highlight 
                  ? 'bg-[#595ce9] border-[#595ce9] scale-105 z-10 shadow-[0_0_40px_rgba(89,92,233,0.2)]' 
                  : 'bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#595ce9] px-4 py-1 rounded-full text-xs font-bold uppercase">
                    Mais Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium opacity-70">R$</span>
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-sm opacity-70">/{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm opacity-80">{plan.videos}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm">
                      <div className={`rounded-full p-1 ${plan.highlight ? 'bg-white/20' : 'bg-[#595ce9]/20'}`}>
                        <Check size={12} className={plan.highlight ? 'text-white' : 'text-[#595ce9]'} />
                      </div>
                      <span className="opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleContact(plan.name)}
                  className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    plan.highlight 
                    ? 'bg-white text-[#595ce9] hover:bg-neutral-100' 
                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                  }`}
                >
                  <MessageCircle size={18} /> Contratar Plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Rodapé */}
      <footer className="py-12 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Video Portfolio</h3>
            <p className="text-neutral-500 text-sm">Elevando o nível do seu conteúdo digital.</p>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
          </div>
          <div className="text-neutral-500 text-xs">
            © 2024 Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Inicialização da aplicação
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
