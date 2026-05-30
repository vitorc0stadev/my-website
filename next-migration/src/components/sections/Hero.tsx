'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react'; // Using lucide-react as a modern alternative
import imbImage from '@/assets/images/projects/imb.jpg';

// Mocking translations for now, you should use next-intl later
const t = (key: string) => {
  const translations: Record<string, any> = {
    'hero.presentation': ['Olá, eu sou', 'Vitor Costa', 'Desenvolvedor Front-end'],
    'hero.welcome': ['Bem-vindo ao meu', 'Portfólio'],
    'hero.contact': 'Entre em contato',
    'hero.project.title': 'Imobille Negócios',
    'hero.project.description': 'Plataforma imobiliária com foco em experiência do usuário.',
    'hero.project.textLink': 'Ver projeto'
  };
  return translations[key] || key;
};

const Hero: React.FC = () => {
  return (
    <section className="hero container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
      <div className="hero__left flex flex-col justify-center w-full lg:w-1/2 min-h-[80vh] lg:min-h-0 py-12 lg:py-24">
        <div className="hero__title mb-12 relative">
          <h1 className="font-semibold relative text-3xl lg:text-5xl text-neutral-800 dark:text-white z-10 leading-tight">
            <span className="block pl-6 opacity-0 animate-fade-in-up">
              {t('hero.presentation')[0]}
            </span>
            <span className="block pl-6 opacity-0 animate-fade-in-up [animation-delay:200ms]">
              {t('hero.presentation')[1]}
            </span>
            <span className="block pl-6 opacity-0 animate-fade-in-up [animation-delay:400ms]">
              {t('hero.presentation')[2]}
            </span>
          </h1>

          <p className="absolute top-1/2 -translate-y-1/2 font-bold tracking-tighter text-gray-200 dark:text-gray-800 opacity-30 text-6xl lg:text-9xl -z-0 pointer-events-none select-none">
            <span className="inline-flex whitespace-nowrap opacity-0 animate-fade-in [animation-delay:200ms]">
              {t('hero.welcome')[0]}
            </span>
            <br />
            <span className="inline-flex whitespace-nowrap opacity-0 animate-fade-in [animation-delay:400ms]">
              {t('hero.welcome')[1]}
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="mailto:vitorcostacontato588@gmail.com"
            className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-base w-full sm:w-auto flex items-center justify-center transition-all opacity-0 animate-fade-in-up [animation-delay:600ms]"
          >
            {t('hero.contact')}
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center h-12 mx-auto text-blue-600 dark:text-white w-12 rounded-full animate-bounce opacity-0 animate-fade-in-up [animation-delay:800ms]">
          <ChevronDown size={32} />
        </div>
      </div>

      <div className="hero__right hidden lg:flex lg:items-center lg:flex-col lg:justify-center px-8 py-16 relative w-full lg:w-[45%] bg-gradient-to-br from-blue-500 to-blue-600/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-16 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -left-24 -bottom-20 w-52 h-52 bg-white/10 rounded-full blur-2xl"></div>

        <div className="hero__right-content relative z-10 w-full max-w-md">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/20 shadow-lg mb-6 group">
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-300"></div>
            <Image
              src={imbImage}
              alt="Projeto Imobille"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="px-2 opacity-0 animate-fade-in [animation-delay:300ms]">
            <h2 className="font-semibold text-white text-lg mb-1">
              {t('hero.project.title')}
            </h2>
            <p className="text-blue-100 text-sm mb-4 leading-relaxed">
              {t('hero.project.description')}
            </p>
            <a
              href="https://imobillenegocios.com.br/"
              className="inline-block text-white text-sm font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('hero.project.textLink')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
