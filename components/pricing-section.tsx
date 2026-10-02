'use client';

import { Check, Star } from 'lucide-react';

/* ===== Constantes de preço e checkout (fáceis de editar) ===== */
const PRICE = 'R$ 24,90';
const CHECKOUT_URL = 'https://pay.cakto.com.br/t2jycye_1130420';

/* O que está incluído na oferta (destaque principal do pacote) */
const highlightFeature: [string, string] = ['60', 'páginas visuais de Gasometria Arterial'];

/* Conteúdos por bloco */
const includedFeatures: [string, string][] = [
  ['14 páginas', 'Fundamentos e Parâmetros'],
  ['6 páginas', 'Equilíbrio Ácido-Base'],
  ['14 páginas', 'Sequência e Distúrbios'],
  ['9 páginas', 'Compensação e Distúrbios Mistos'],
  ['6 páginas', 'Oxigenação'],
  ['11 páginas', 'Casos e Revisão Final'],
];

const bonuses = [
  'Recurso #1 — 14 Casos Comentados',
  'Recurso #2 — Roteiro de Interpretação',
  'Recurso #3 — Fórmulas e Revisão Final',
];

function goToCheckout(url: string) {
  if (!url || url === '#') return;
  const params = window.location.search;
  const separator = url.includes('?') ? '&' : '?';
  window.location.href = params ? `${url}${separator}${params.slice(1)}` : url;
}

export function PricingSection() {
  return (
    <section id="checkout" className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#FAFBFC' }}>
      <div className="mobile-content">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-10 md:mb-14">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#173D55' }}>
            
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#526176' }}>
            
          </p>
        </div>

        {/* Plano único */}
        <div className="mx-auto flex max-w-xl">
          <div
            className="relative flex w-full flex-col rounded-[22px] p-6 pt-10 sm:p-8 sm:pt-11"
            style={{
              backgroundColor: '#DCEEF5',
              border: '1px solid #A9C9DA',
              boxShadow: '0 8px 24px rgba(23, 61, 85, 0.12)',
            }}
          >
            {/* Badge OFERTA ESPECIAL */}
            <div
              className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: '#22C55E', color: '#FFFFFF', boxShadow: '0 6px 16px rgba(34, 197, 94, 0.4)' }}
            >
              <Star size={12} strokeWidth={2.5} fill="#FBF8F2" aria-hidden="true" />
              Oferta Especial
            </div>

            {/* Nome */}
            <div className="text-center">
              <h3 className="font-grotesk text-2xl sm:text-3xl leading-tight text-balance" style={{ color: '#173D55' }}>
                Guia Visual de Gasometria Arterial
              </h3>
            </div>

            {/* Mockup grande */}
            <div className="mt-5 flex justify-center">
              <img
                src="/images/dental/pricing-colecao-v3.webp"
                alt="Guia Visual de Gasometria Arterial em PDF com 60 páginas e garantia de 7 dias"
                className="w-full max-w-[440px] h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Destaque principal do pacote */}
            <ul className="mt-6 space-y-3.5">
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                  style={{ width: '24px', height: '24px', backgroundColor: '#22C55E', color: '#FFFFFF' }}
                >
                  <Check size={15} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-base sm:text-lg leading-snug" style={{ color: '#173D55' }}>
                  <span className="font-bold" style={{ color: '#173D55' }}>{highlightFeature[0]}</span>{' '}
                  <span className="font-semibold">{highlightFeature[1]}</span>
                </span>
              </li>

              {includedFeatures.map(([num, rest]) => (
                <li key={rest} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex shrink-0 items-center justify-center rounded-full"
                    style={{ width: '22px', height: '22px', backgroundColor: '#22C55E', color: '#FFFFFF' }}
                  >
                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base leading-snug" style={{ color: '#293746' }}>
                    <span className="font-bold">{num}</span> — {rest}
                  </span>
                </li>
              ))}
            </ul>

            {/* Recursos */}
            <ul className="mt-5 space-y-3">
              {bonuses.map((bonus) => (
                <li key={bonus} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-base leading-none" aria-hidden="true">
                    🎁
                  </span>
                  <span className="text-sm sm:text-base font-semibold leading-snug" style={{ color: '#293746' }}>
                    {bonus}
                  </span>
                </li>
              ))}
            </ul>

            {/* Separador antes da área de preço */}
            <div className="mt-6 mb-5 h-px w-full" style={{ backgroundColor: 'rgba(23,61,85,0.18)' }} />

            {/* Área de preço */}
            <div className="text-center">
              <p className="text-sm" style={{ color: '#526176' }}>
                
              </p>
              <p className="mt-3 font-grotesk text-xs sm:text-sm uppercase tracking-[0.16em]" style={{ color: '#173D55' }}>
                Hoje por apenas
              </p>
              <p className="mt-1 font-grotesk text-6xl sm:text-7xl leading-none" style={{ color: '#22C55E' }}>
                {PRICE}
              </p>
              <p className="mt-3 text-xs sm:text-sm font-medium" style={{ color: '#526176' }}>
                Pagamento único • Sem mensalidade
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => goToCheckout(CHECKOUT_URL)}
              className="mt-6 w-full rounded-full py-4 px-6 text-base font-bold active:scale-95 cta-animate"
              style={{
                background: '#22C55E',
                color: '#FFFFFF',
                border: '1px solid #22C55E',
                boxShadow: '0 10px 26px rgba(34, 197, 94, 0.35)',
                transition: 'all 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#16A34A';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#22C55E';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR O GUIA VISUAL
            </button>

            {/* Linha de confiança */}
            <p className="mt-5 text-center text-xs sm:text-sm font-medium leading-relaxed" style={{ color: '#293746' }}>
              🔒 Compra segura • 💳 Pagamento protegido • ⚡ Acesso imediato • ✅ 7 dias de garantia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
