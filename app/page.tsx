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

const carrossel1 = [
  { image: '/images/gaso/c1-acidose-respiratoria.webp', title: 'Acidose Respiratória', tag: 'Os Quatro Distúrbios' },
  { image: '/images/gaso/c1-compensacao.webp', title: 'O Que É Compensação?', tag: 'Equilíbrio Ácido-Base' },
  { image: '/images/gaso/c1-quatro-disturbios.webp', title: 'Os Quatro Distúrbios Primários', tag: 'Equilíbrio Ácido-Base' },
  { image: '/images/gaso/c1-pulmoes-rins.webp', title: 'Pulmões e Rins', tag: 'Equilíbrio Ácido-Base' },
  { image: '/images/gaso/c1-pao2-sao2-spo2.webp', title: 'PaO₂, SaO₂ e SpO₂', tag: 'O Exame e Seus Parâmetros' },
  { image: '/images/gaso/c1-ph-estado.webp', title: 'pH: O Estado Ácido-Base', tag: 'O Exame e Seus Parâmetros' },
  { image: '/images/gaso/c1-arterial-venosa.webp', title: 'Arterial e Venosa', tag: 'O Exame e Seus Parâmetros' },
  { image: '/images/gaso/c1-hco3.webp', title: 'HCO₃⁻: O Componente Metabólico', tag: 'O Exame e Seus Parâmetros' },
];

const carrossel2 = [
  { image: '/images/gaso/c2-oxigenio-sangue-tecidos.webp', title: 'Oxigênio no Sangue e nos Tecidos', tag: 'Oxigenação' },
  { image: '/images/gaso/c2-gradiente-alveolo-arterial.webp', title: 'Gradiente Alvéolo-Arterial', tag: 'Oxigenação' },
  { image: '/images/gaso/c2-pao2-contexto.webp', title: 'PaO₂ Depende do Contexto', tag: 'Oxigenação' },
  { image: '/images/gaso/c2-albumina-anion-gap.webp', title: 'Albumina e Ânion Gap Corrigido', tag: 'Compensação e Distúrbios Mistos' },
  { image: '/images/gaso/c2-calcular-anion-gap.webp', title: 'Ânion Gap: Como Calcular', tag: 'Compensação e Distúrbios Mistos' },
  { image: '/images/gaso/c2-alcalose-metabolica.webp', title: 'Alcalose Metabólica', tag: 'Os Quatro Distúrbios' },
  { image: '/images/gaso/c2-acidose-metabolica.webp', title: 'Acidose Metabólica', tag: 'Os Quatro Distúrbios' },
  { image: '/images/gaso/c2-alcalose-respiratoria.webp', title: 'Alcalose Respiratória', tag: 'Os Quatro Distúrbios' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAFBFC' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProductCarousel
        title="CONHEÇA O MATERIAL POR DENTRO"
        subtitle="Veja como o conteúdo foi organizado para você acompanhar as etapas de interpretação, relacionar os parâmetros e entender o conjunto dos resultados."
        items={carrossel1}
        bg="#FAFBFC"
      />
      <HowItWorks />
      <WhatYouGet />
      <SubjectsSection />
      <ProductCarousel
title="Uma Forma Visual de Compreender a Gasometria Arterial"
  subtitle="Fluxogramas mostram o caminho, comparações destacam as diferenças e casos comentados ajudam você a entender como tudo se conecta."
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
