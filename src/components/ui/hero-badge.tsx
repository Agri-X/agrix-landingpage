"use client";

import { motion, useAnimation, type Variants } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1];

interface HeroBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "custom";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variants = {
  default: "bg-primary/5 text-primary border-primary/10",
  outline: "bg-transparent text-primary border-primary/20",
  ghost: "bg-transparent text-primary border-transparent",
  custom: "",
};

const sizeVariants = {
  sm: "text-xs px-2.5 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
};

const iconAnimationVariants: Variants = {
  initial: { rotate: 0 },
  hover: { rotate: -10 },
};

const HeroBadge = ({
  href,
  text,
  icon,
  endIcon,
  variant = "default",
  size = "md",
  className,
  onClick,
  ...props
}: HeroBadgeProps) => {
  const controls = useAnimation();

  const baseClassName = cn(
    "inline-flex items-center rounded-full border transition-colors",
    variants[variant],
    sizeVariants[size],
    className
  );

  const content = (
    <motion.div
      className="flex items-center gap-1.5"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {icon && (
        <motion.div
          className="text-foreground/60 transition-colors group-hover:text-primary"
          variants={iconAnimationVariants}
          initial="initial"
          animate={controls}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {icon}
        </motion.div>
      )}
      <span>{text}</span>
      {endIcon && (
        <motion.div className="text-foreground/60">{endIcon}</motion.div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group", href && "cursor-pointer")}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClassName} onClick={onClick}>
      {content}
    </button>
  );
};

export default HeroBadge; 