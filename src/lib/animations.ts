import type { Variants, Transition } from "motion/react";

// Shared transition configs
export const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export const easeTransition: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

// Fade variants
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Slide variants
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

// Collapse variants (for menus)
export const collapse: Variants = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: "auto" },
  exit: { opacity: 0, height: 0 },
};

// Hover effects
export const hoverScale: Variants = {
  initial: {},
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
};

export const hoverScaleSmall: Variants = {
  initial: {},
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export const hoverLift: Variants = {
  initial: {},
  hover: { y: -2 },
};

export const hoverSlideRight: Variants = {
  initial: {},
  hover: { x: 3 },
};

// List item stagger helper
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const listItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Job row hover
export const jobRowHover = {
  backgroundColor: "rgba(19, 149, 217, 0.05)",
};

// Stagger delay helper
export const getStaggerDelay = (index: number, baseDelay = 0.03) => ({
  duration: 0.2,
  delay: index * baseDelay,
});
