'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Para quem é o Guia Visual de Gasometria Arterial?',
      a: 'Para quem deseja estudar, revisar ou compreender melhor a gasometria arterial. O conteúdo reúne fundamentos, etapas de interpretação, distúrbios, oxigenação e casos comentados para acompanhar diferentes momentos do estudo.',
    },
    {
      q: 'Quais assuntos aparecem no material?',
      a: 'O guia aborda os parâmetros do laudo, equilíbrio ácido-base, sequência de interpretação, distúrbios respiratórios e metabólicos, compensação, gap aniônico e oxigenação.',
    },
    {
      q: 'O material substitui livros e aulas?',
      a: 'O guia funciona como material complementar de estudo e consulta. Não substitui livros, aulas, protocolos ou avaliação profissional.',
    },
    {
      q: 'O material é físico ou digital?',
      a: 'O material é digital, em PDF. Você não receberá um produto físico pelos Correios.',
    },
    {
      q: 'Posso acessar pelo celular?',
      a: 'Sim. O PDF pode ser aberto no celular, tablet ou computador. Você pode ampliar as páginas para visualizar os detalhes.',
    },
    {
      q: 'Posso imprimir?',
      a: 'Sim. Você pode imprimir o PDF para uso pessoal e organizar suas revisões da forma que preferir.',
    },
    {
      q: 'Como receberei o acesso e por quanto tempo poderei usar?',
      a: 'As instruções de acesso serão disponibilizadas após a confirmação do pagamento, pelo canal informado no checkout. Depois de baixar o PDF, você poderá guardar o arquivo e consultá-lo quando precisar. O pagamento é único, sem mensalidade.',
    },
    {
      q: 'Como funciona a garantia?',
      a: 'Você tem 7 dias para conhecer o material. Caso ele não atenda às suas expectativas, poderá solicitar o reembolso pelo canal de atendimento informado na compra, dentro desse prazo.',
    },
  ];

  return (
    <section className="w-full py-14 px-0" style={{ backgroundColor: '#DCEEF5' }}>
      <div className="mobile-content">
        <h2
          className="font-grotesk text-center"
          style={{ color: '#173D55', fontSize: '32px', fontWeight: 600, marginBottom: '28px', lineHeight: 1.2 }}
        >
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col" style={{ gap: '10px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DCE3E9',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 14px rgba(23, 61, 85, 0.08)',
                  width: '100%',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between transition-colors"
                  style={{ padding: '19px 18px' }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-left"
                    style={{
                      color: '#173D55',
                      fontSize: '15px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      paddingRight: '14px',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="transition-transform duration-200"
                    style={{
                      color: '#173D55',
                      fontSize: '20px',
                      fontWeight: 700,
                      flexShrink: 0,
                      lineHeight: 1,
                      marginTop: '1px',
                    }}
                  >
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>

                <div
                  className="transition-all duration-200 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      borderTop: '1px solid #DCE3E9',
                      backgroundColor: '#EEF2F5',
                      padding: '19px 18px',
                    }}
                  >
                    <p
                      className="text-left"
                      style={{ color: '#293746', fontSize: '15px', lineHeight: 1.6 }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
