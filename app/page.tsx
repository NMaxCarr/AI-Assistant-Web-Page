import Hero from '@/components/ui/Hero';
import Features from '@/components/ui/Features';
import Download from '@/components/ui/Download';

export default async function MainPage() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Download />
      <Features />
    </div>
  );
}
