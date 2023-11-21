import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeInAnimationVariantsDynamic = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const fadeInAnimationVariantsForStatic = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: () => ({
      opacity: 1,
      y: 0,
  }),
};