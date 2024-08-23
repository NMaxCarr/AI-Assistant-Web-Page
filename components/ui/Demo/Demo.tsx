import React from 'react';

interface DemoProps {
  className?: string;
}

export default function Demo({ className }: DemoProps) {
  return (
    <div id="demo" className={className}>
      <div className="w-fit mx-auto text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
        Demo 🎥
      </div>
      <iframe
        className="my-10"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8i1s1-IywBQ?si=_q1oNPcbGoybTz0o"
        title="AI-Assistant Demo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
