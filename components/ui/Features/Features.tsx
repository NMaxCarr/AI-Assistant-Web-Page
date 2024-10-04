import React from 'react';
import { BentoCard, BentoGrid } from '../bento-grid';
import {
  CameraIcon,
  LightningBoltIcon,
  LockClosedIcon,
  Share1Icon,
  TextIcon,
} from "@radix-ui/react-icons";
import { BanknoteIcon, BookOpen, TruckIcon } from 'lucide-react';
import { MultiVendorAnimatedBeam } from './MultiVendorAnimatedBeam';


interface FeaturesProps {
  className?: string;
}

const features = [
  {
    Icon: LockClosedIcon,
    name: "Private",
    description: "Your data only belong to you. Entire conversation history is stored locally.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: TruckIcon,
    name: "Easy to install",
    description: "No need to start a localhost server, install docker or any external service. It just works.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: BanknoteIcon,
    name: "Cheap",
    description: "Save on AI monthly subscription costs. You only pay for what you use at minimum API price.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: Share1Icon,
    name: "Multi Vendor LLM",
    description:(
      <>
        <p>OpenAI, Anthropic</p>
        <p>Local Inference comming soon...</p>
      </>
    ),
    href: "/",
    cta: "Learn more",
    background: (
      <MultiVendorAnimatedBeam className="absolute right-2 top-4 h-[150px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: TextIcon,
    name: "Rich Text Input",
    description: "Write prompts as rich text. Visuallize code block, citation, heading, and more...",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-4 lg:col-span-1",
  },
  {
    Icon: CameraIcon,
    name: "Screenshot",
    description: "Easily use screenshot as prompt context.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-4 lg:col-span-1",
  },  
  {
    Icon: LightningBoltIcon,
    name: "Fast",
    description: "Running natively on your machine using a rust backend.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-4 lg:col-span-1",
  },
  {
    Icon: BookOpen,
    name: "Helpful",
    description: "AI always tries to give references and examples.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-4 lg:col-span-1",
  },
];

export default function Features({ className }: FeaturesProps) {
  return (
    <section id="features" className={className}>
      <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    </section>
  );
}
