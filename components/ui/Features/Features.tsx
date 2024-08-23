import React from 'react';

import s from './Features.module.css';

interface FeaturesProps {
  className?: string;
}

export default function Features({ className }: FeaturesProps) {
  return (
    <section id="features" className={className}>
      <h3 className={s.title}>Innovative features 🔥</h3>
      <div className={s.table}>
        <div className={s.container}>
          <div>Tools</div>
          <ul className={s.items}>
            <li>Local inference for private data</li>
            <li>Computer screenshot</li>
            <li>Web Search</li>
            <li>Image Generation</li>
          </ul>
        </div>
        <div className={s.container}>
          <div>Multiple LLM vendors</div>
          <ul className={s.items}>
            <li>Local Phi3, LLama3</li>
            <li>OpenAI</li>
            <li>Anthropic</li>
          </ul>
        </div>
        <div className={s.container}>
          <div>Compatible on</div>
          <ul className={s.items}>
            <li>Windows</li>
            <li>macOS</li>
            <li>Ubuntu/Debian</li>
          </ul>
        </div>
        <div className={s.container}>
          <div>Extendable</div>
          <ul className={s.items}>
            <li>Open source extensions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
