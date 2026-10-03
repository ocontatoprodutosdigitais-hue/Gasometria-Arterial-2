'use client';

import { Star } from 'lucide-react';

const bonuses = [
  {
    label: 'BÔNUS 1',
    name: 'Biblioteca Visual de Laudos Comentados',
    description:
      'Explore 20 novos exemplos de laudos, com valores destacados e explicações que mostram onde olhar e como chegar à interpretação de cada situação.',
    price: 'R$ 17,00',
    image: '/images/dental/bonus-erupcao.webp',
  },
  {
    label: 'BÔNUS 2',
    name: 'Painéis Visuais dos Distúrbios Ácido-Base',
    description:
      'Compare os principais distúrbios lado a lado e visualize o que muda nos parâmetros, quais diferenças observar e como distinguir os padrões durante o estudo.',
    price: 'R$ 19,90',
    image: '/images/dental/bonus-checklist.webp',
  },
  {
    label: 'BÔNUS 3',
    name: 'Gasometrias que Confundem — Casos Visuais Explicados',
    description:
      'Entenda situações em que os valores parecem normais ou mais de uma alteração aparece no mesmo caso, com destaques visuais que mostram o que merece atenção e por quê.',
    price: 'R$ 24,00',
    image: '/images/dental/bonus-revisao.webp',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#FBBF24" strokeWidth={0} />
      ))}
    </div>
  );
}

export function BonusSection() {
  return (
      <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#DCEEF5' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <span className="font-grotesk text-xs sm:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: '#FFFFFF' }}>
            
          </span>
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-balance" style={{ color: '#173D55' }}>
            Além do material completo, Você Recebe Mais 3 Bônus para Complementar Seu Estudo
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#526176' }}>
            Recursos extras para complementar seus estudos e reforçar os principais conteúdos de gasometria arterial.
          </p>
        </div>

        {/* Cards: empilhados no mobile, lado a lado no desktop */}
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-6 lg:flex-row lg:gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.label}
              className="bonus-card flex w-full flex-col rounded-[20px] p-5 sm:p-6"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCE3E9',
                boxShadow: '0 12px 30px rgba(23, 61, 85, 0.10)',
                transition: 'all 250ms ease',
              }}
            >
              {/* Badge */}
              <span
                className="self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                style={{ backgroundColor: '#173D55', color: '#FFFFFF' }}
              >
                {bonus.label}
              </span>

              {/* Mockup */}
              <div className="mt-4 flex justify-center">
                <img
                  src={bonus.image || '/placeholder.svg'}
                  alt={`Bônus: ${bonus.name}`}
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              {/* Estrelas */}
              <div className="mt-4">
                <StarRow />
              </div>

              {/* Nome */}
              <h3 className="mt-3 font-grotesk text-base sm:text-lg leading-snug" style={{ color: '#173D55' }}>
                {bonus.name}
              </h3>

              {/* Descrição */}
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: '#526176' }}>
                {bonus.description}
              </p>

              {/* Observação + selo */}
              <div className="mt-5 flex items-center justify-between gap-3 border-t pt-4" style={{ borderColor: '#DCE3E9' }}>
                <span className="text-sm" style={{ color: '#526176' }}>
                  De <s>{bonus.price}</s>
                </span>
                <span
                  className="flex flex-col items-center rounded-full px-4 py-1.5 text-xs font-bold uppercase leading-tight tracking-wide"
                  style={{ backgroundColor: '#22C55E', color: '#FFFFFF' }}
                >
                  <span>Hoje</span>
                  <span>Grátis</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bonus-card:hover {
          transform: translateY(-4px);
          border-color: #173D55;
          box-shadow: 0 20px 42px rgba(23, 61, 85, 0.16);
        }
      `}</style>
    </section>
  );
}
