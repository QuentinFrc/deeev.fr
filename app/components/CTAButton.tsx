import { cn } from "@/lib/utils";

interface CTAButtonProps {
  className?: string;
}

export default function CTAButton({ className }: CTAButtonProps) {
  return (
    <a
      href="#demo"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors w-fit",
        className,
      )}
    >
      <span className="font-geologica font-medium text-base tracking-[-0.48px]">
        Voir la démo
      </span>
      <span className="text-background/50">&rarr;</span>
    </a>
  );
}
