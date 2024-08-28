import { Suspense } from 'react';

import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import BlurFade from '@/components/animations/blur-fade';
import Container from '@/components/ui/container';
import Hero from '@/components/ui/Hero';
import Features from '@/components/ui/Features';
import Demo from '@/components/ui/Demo';

export default async function MainPage() {
  const supabase = createClient();
  const [products] = await Promise.all([
    // getUser(supabase),
    getProducts(supabase)
    // getSubscription(supabase)
  ]);

  return (
    <>
      <Container className="h-[calc(80dvh-4rem)] md:h[calc(80dvh-5rem)]">
        <BlurFade
          className="flex flex-col w-full h-full"
          delay={0.15 * 2}
          inView
        >
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
        <BlurFade delay={0.15 * 5}>
          <Pricing
            user={undefined}
            products={products ?? []}
            subscription={null}
          />
        </BlurFade>
      </Container>
    </>
  );
}
