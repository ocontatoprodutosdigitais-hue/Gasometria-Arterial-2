export function HowItWorks() {
  const steps = [
    ['1', 'OBSERVE', 'Confira os dados do laudo e o contexto em que a amostra foi coletada.'],
    ['2', 'RELACIONE', 'Entenda como pH, PaCO₂ e HCO₃⁻ se conectam na interpretação.'],
    ['3', 'INTERPRETE', 'Acompanhe a sequência de leitura, a resposta esperada, o gap e a oxigenação.'],
    ['4', 'PRATIQUE', 'Resolva os casos antes de conferir os comentários e revise os pontos que geraram dúvida.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#DCEEF5' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#173D55' }}>
            Estudar Gasometria Arterial Pode Ser Muito Mais Visual
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#526176' }}>
            Em quatro etapas, você aprende a interpretar a gasometria sem depender apenas da memorização: entenda os valores, reconheça as alterações e pratique o raciocínio com casos comentados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="how-it-works-card relative flex flex-col items-center text-center h-full"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid #DCE3E9',
                boxShadow: '0 12px 30px rgba(23, 61, 85, 0.10)',
                padding: '28px',
                transition: 'all 250ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-full"
                style={{ height: '4px', backgroundColor: '#173D55' }}
              />
              <div
                className="rounded-full flex items-center justify-center text-xl font-bold font-grotesk mb-4"
                style={{
                  width: '52px',
                  height: '52px',
                  background: '#173D55',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 14px rgba(23, 61, 85, 0.2)',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg mb-3 uppercase tracking-wide" style={{ color: '#173D55' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#526176' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-it-works-card:hover {
          transform: translateY(-4px);
          border-color: #173D55;
          box-shadow: 0 18px 38px rgba(23, 61, 85, 0.16);
        }
      `}</style>
    </section>
  );
}
