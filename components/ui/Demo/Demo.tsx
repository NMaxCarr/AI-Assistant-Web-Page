import React from 'react';

import s from './Demo.module.css';

interface DemoProps {
  className?: string;
}

export default function Demo({ className }: DemoProps) {
  return (
    <div id="demo" className={className}>
      <div className={s.title}>Demo 🎥</div>
      <iframe
        className={s.video}
        src="https://www.youtube.com/embed/8i1s1-IywBQ?si=_q1oNPcbGoybTz0o"
        title="AI-Assistant Demo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
