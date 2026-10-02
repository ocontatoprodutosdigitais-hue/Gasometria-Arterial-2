'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { SubjectsSection } from '@/components/subjects-section';
import { PricingSection } from '@/components/pricing-section';
import { BonusSection } from '@/components/bonus-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

// Imagens atuais mantidas provisoriamente; serão trocadas por páginas do guia de gasometria.
const carrossel1 = [
  { image: '/images/dental/v1-quadrantes.webp', title: 'Visão Geral da Interpretação', tag: 'Fundamentos e Parâmetros' },
  { image: '/images/dental/v1-numeracao-permanentes.webp', title: 'Como Ler um Laudo', tag: 'Fundamentos e Parâmetros' },
  { image: '/images/dental/v1-numeracao-deciduos.webp', title: 'pH: O Estado Ácido-Base', tag: 'Fundamentos e Parâmetros' },
  { image: '/images/dental/v1-mesial-distal.webp', title: 'PaCO₂: O Componente Respiratório', tag: 'Fundamentos e Parâmetros' },
  { image: '/images/dental/v1-coroa-colo-raiz.webp', title: 'HCO₃⁻: O Componente Metabólico', tag: 'Fundamentos e Parâmetros' },
  { image: '/images/dental/v1-sulcos-fissuras.webp', title: 'Os Quatro Distúrbios Primários', tag: 'Equilíbrio Ácido-Base' },
  { image: '/images/dental/v1-cuspides-vertentes.webp', title: 'Verifique a Compensação', tag: 'Sequência e Distúrbios' },
  { image: '/images/dental/v1-oclusao.webp', title: 'Casos Comentados', tag: 'Casos e Revisão Final' },
];

const carrossel2 = [
  { image: '/images/dental/c2-incisivo-central.webp', title: 'Compensação na Acidose Metabólica', tag: 'Compensação e Distúrbios Mistos' },
  { image: '/images/dental/c2-canino-inferior.webp', title: 'Como Calcular o Gap Aniônico', tag: 'Compensação e Distúrbios Mistos' },
  { image: '/images/dental/c2-premolar-superior.webp', title: 'Albumina e Gap Corrigido', tag: 'Compensação e Distúrbios Mistos' },
  { image: '/images/dental/c2-premolar-oclusal.webp', title: 'Como Reconhecer Distúrbios Mistos', tag: 'Compensação e Distúrbios Mistos' },
  { image: '/images/dental/c2-resumao-premolares.webp', title: 'PaO₂ Depende do Contexto', tag: 'Oxigenação' },
  { image: '/images/dental/c2-molar-superior.webp', title: 'Relação PaO₂/FiO₂', tag: 'Oxigenação' },
  { image: '/images/dental/c2-denticao-decidua.webp', title: 'Roteiro de Interpretação', tag: 'Casos e Revisão Final' },
  { image: '/images/dental/c2-mesial-distal.webp', title: 'Fórmulas e Siglas', tag: 'Casos e Revisão Final' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAFBFC' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProductCarousel
        title="Conheça o Guia Visual de Gasometria Arterial por Dentro"
        subtitle="Veja como o conteúdo foi organizado para você acompanhar as etapas de interpretação, relacionar os parâmetros e entender o conjunto dos resultados."
        items={carrossel1}
        bg="#FAFBFC"
      />
      <HowItWorks />
      <WhatYouGet />
      <SubjectsSection />
      <ProductCarousel
        title="Mais Clareza para Entender. Mais Recursos para Estudar."
        subtitle="Explicações visuais, comparações, fórmulas e casos comentados reunidos para você aprofundar o conteúdo e revisar o que ainda gera dúvida."
        flowSteps={[
          ['Fluxogramas de Interpretação', 'Saiba o que analisar primeiro e como avançar na leitura da gasometria, com uma sequência visual que mostra como conectar os dados e chegar à interpretação.'],
          ['Explicações Visuais', 'Entenda as relações entre os parâmetros e os mecanismos dos distúrbios.'],
          ['Comparações de Padrões', 'Observe diferenças entre alterações respiratórias, metabólicas e respostas esperadas.'],
          ['Fórmulas e Consulta', 'Confira como fazer os cálculos e o que eles ajudam a identificar, com as fórmulas e siglas organizadas para consultar quando surgir uma dúvida.'],
          ['Casos Comentados', 'Entenda como aplicar o conteúdo em 14 casos comentados, com explicações que mostram o que observar nos valores e por que cada caso leva àquela interpretação.'],
        ]}
        items={carrossel2}
        reverse={true}
        bg="#FAFBFC"
      />
      <Testimonials />
      <BonusSection />
      <div ref={offerRef}><PricingSection /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
