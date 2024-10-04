import { BRAND_NAME } from '@/app/configuration';
import Image from 'next/image';
import AppIcon from '/public/images/ai_likes_human.svg';


type LogoProps = {
  className?: string;
};


export const AiLikesHuman = ({ className }: LogoProps) => (
  <Image
    width={50}
    height={50}
    alt={BRAND_NAME}
    className={className}
    src={AppIcon}
  />
);

