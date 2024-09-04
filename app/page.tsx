import { Suspense } from 'react';

import BlurFade from '@/components/animations/blur-fade';
import Container from '@/components/ui/container';
import Hero from '@/components/ui/Hero';
import Features from '@/components/ui/Features';
import Demo from '@/components/ui/Demo';

export default async function MainPage() {
  return (
    <>
      <Container className="h-[calc(80dvh-4rem)] md:h[calc(80dvh-5rem)]">
        <BlurFade className="flex flex-col w-full h-full" delay={0.15 * 2}>
          <Hero className="m-auto" />
        </BlurFade>
      </Container>
      <Container className="flex flex-col items-center gap-10">
        <BlurFade delay={0.15 * 3}>
          <Features />
        </BlurFade>
        <BlurFade delay={0.15 * 4}>
          <Suspense>
            <Demo />
          </Suspense>
        </BlurFade>
      </Container>
    </>
  );
}
