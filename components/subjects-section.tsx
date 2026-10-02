import { Compass, Eye, GitCompare, Grid2x2, Layers, ListChecks } from 'lucide-react';

type Block = {
  badge: string;
  title: string;
  icon: typeof Compass;
  accent: string;
  items: string[];
  description: string;
};

const accent = '#173D55';

const blocks: Block[] = [
  {
    badge: 'FUNDAMENTOS',
    title: 'Fundamentos e Parâmetros',
    icon: Compass,
    accent,
    items: [
      'Como estudar com o guia',
      'Mapa do conteúdo',
      'Visão geral da interpretação',
      'O que a gasometria avalia',
      'Amostra arterial e venosa',
      'Como ler um laudo',
      'Valores de referência',
      'pH, PaCO₂ e HCO₃⁻',
      'PaO₂, SaO₂ e SpO₂',
      'Excesso de base e lactato',
      'Qualidade da amostra',
    ],
    description: 'Entenda o que cada dado representa antes de interpretar o conjunto.',
  },
  {
    badge: 'EQUILÍBRIO ÁCIDO-BASE',
    title: 'Equilíbrio Ácido-Base',
    icon: Eye,
    accent,
    items: [
      'Ácidos, bases e tampões',
      'Papel dos pulmões e dos rins',
      'Relação entre pH, CO₂ e bicarbonato',
      'Ventilação e oxigenação',
      'Os quatro distúrbios primários',
      'O que é compensação',
    ],
    description: 'Construa a base para compreender os mecanismos das alterações.',
  },
  {
    badge: 'SEQUÊNCIA E DISTÚRBIOS',
    title: 'Sequência e Distúrbios',
    icon: GitCompare,
    accent,
    items: [
      'Contexto antes dos números',
      'Avaliação do pH',
      'Relação entre os componentes',
      'Verificação da compensação',
      'Alterações associadas',
      'Oxigenação e síntese',
      'Acidose respiratória',
      'Alcalose respiratória',
      'Acidose metabólica',
      'Alcalose metabólica',
    ],
    description: 'Siga uma ordem de leitura e entenda os principais padrões ácido-base.',
  },
  {
    badge: 'COMPENSAÇÃO',
    title: 'Compensação e Distúrbios Mistos',
    icon: Grid2x2,
    accent,
    items: [
      'Fórmula de Winter',
      'Resposta na alcalose metabólica',
      'Distúrbios respiratórios agudos e crônicos',
      'Cálculo do gap aniônico',
      'Albumina e gap corrigido',
      'Acidose metabólica e gap',
      'Delta gap e razão delta',
      'Reconhecimento de distúrbios mistos',
      'Investigação com pH na faixa usual',
    ],
    description: 'Compare a resposta observada com a esperada e reconheça pistas de alterações associadas.',
  },
  {
    badge: 'OXIGENAÇÃO',
    title: 'Oxigenação',
    icon: Layers,
    accent,
    items: [
      'PaO₂ e contexto',
      'Relação PaO₂/FiO₂',
      'Gradiente alvéolo-arterial',
      'Mecanismos de hipoxemia',
      'Curva da oxi-hemoglobina',
      'Oxigênio no sangue e nos tecidos',
    ],
    description: 'Relacione os resultados ao oxigênio ofertado e às condições da avaliação.',
  },
  {
    badge: 'CASOS E REVISÃO',
    title: 'Casos e Revisão Final',
    icon: ListChecks,
    accent,
    items: [
      '14 casos comentados',
      'Padrões respiratórios e metabólicos',
      'Distúrbios mistos',
      'Casos de oxigenação',
      'Leitura integrada',
      'Erros frequentes',
      'Roteiro de interpretação',
      'Fórmulas e siglas',
      'Checklist de estudo',
    ],
    description: 'Pratique a leitura do conjunto e consulte os pontos essenciais para revisar.',
  },
];

export function SubjectsSection() {
  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#EEF2F5' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-14">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#173D55' }}>
            Veja Tudo o Que Você Vai Encontrar no Material
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#526176' }}>
            O conteúdo foi dividido em seis blocos para você localizar rapidamente o que precisa estudar e acompanhar cada assunto com mais clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <article
                key={block.badge}
                className="flex flex-col rounded-[18px] border p-6 sm:p-7"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#DCE3E9', boxShadow: '0 8px 24px rgba(23,61,85,0.06)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex shrink-0 items-center justify-center rounded-xl"
                    style={{ width: '44px', height: '44px', backgroundColor: '#DCEEF5', color: block.accent }}
                  >
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: '#526176' }}
                    >
                      {block.badge}
                    </span>
                    <h3 className="font-grotesk text-lg leading-tight sm:text-xl" style={{ color: '#173D55' }}>
                      {block.title}
                    </h3>
                  </div>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#293746' }}>
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: block.accent }}
                        aria-hidden="true"
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 border-t pt-4 text-sm leading-relaxed" style={{ color: '#526176', borderColor: '#DCE3E9' }}>
                  {block.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
