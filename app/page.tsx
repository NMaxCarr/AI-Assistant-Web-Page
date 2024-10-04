import Hero from '@/components/hero';
import Features from '@/components/features';
import Download from '@/components/download';


export default async function MainPage() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Download />
      <Features />
    </div>
  );
}
