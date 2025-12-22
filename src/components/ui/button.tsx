import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Custom variants for Mei Hoff
        gold: "bg-gold text-burgundy font-semibold hover:bg-gold/90 hover:shadow-[0_0_30px_hsl(42_89%_66%/0.3)] transition-all duration-300",
        goldOutline: "border-2 border-gold text-gold bg-transparent hover:bg-gold/10 hover:shadow-[0_0_20px_hsl(42_89%_66%/0.2)]",
        mauve: "bg-mauve text-cream hover:bg-mauve/80",
        mauveOutline: "border border-mauve text-mauve bg-transparent hover:bg-mauve/10",
        hero: "bg-gold text-burgundy font-semibold text-base px-8 py-6 hover:bg-gold/90 hover:shadow-[0_0_40px_hsl(42_89%_66%/0.4)] hover:scale-105 transition-all duration-300",
        heroOutline: "border-2 border-cream/30 text-cream bg-transparent text-base px-8 py-6 hover:bg-cream/10 hover:border-cream/50 transition-all duration-300",
        social: "bg-muted/50 text-cream border border-border hover:bg-gold/20 hover:border-gold/50 hover:text-gold transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
        xl: "h-14 rounded-sm px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
