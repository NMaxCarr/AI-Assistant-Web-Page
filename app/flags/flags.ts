import { unstable_flag as flag } from '@vercel/flags/next';

export const showPricing = flag({
  key: 'pricing',
  decide: () => false
});
