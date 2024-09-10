import { Suspense } from 'react';

import BlurFade from '@/components/animations/blur-fade';
import Container from '@/components/ui/container';
import Hero from '@/components/ui/Hero';
import Features from '@/components/ui/Features';
import Demo from '@/components/ui/Demo';
import Dowload from '@/components/ui/Dowload/Dowload';

export default async function MainPage() {
  return (
    <>
      <Container className="flex flex-col h-[calc(50dvh)] justify-center">
        <BlurFade delay={0.15 * 2}>
          <Hero />
        </BlurFade>
        <BlurFade className="mx-auto" delay={0.15 * 3}>
          <Dowload />
        </BlurFade>
      </Container>
      <Container className="flex flex-col items-center gap-10">
        <BlurFade delay={0.15 * 4}>
          <Features />
        </BlurFade>
        <BlurFade delay={0.15 * 5}>
          <Suspense>
            <Demo />
          </Suspense>
        </BlurFade>
      </Container>
    </>
  );
}
