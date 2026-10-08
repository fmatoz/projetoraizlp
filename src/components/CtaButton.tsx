import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTA_LABEL, whatsappUrl } from "@/config/site";

export interface CtaButtonProps {
  className?: string;
  variant?: "solid" | "outline" | "light";
  arrow?: boolean;
}

/** Abre o WhatsApp; sem número configurado, mostra aviso discreto. */
export function CtaButton({ className, variant = "solid", arrow = true }: CtaButtonProps) {
  const [notice, setNotice] = useState(false);
  const url = whatsappUrl();
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    variant === "solid" && "bg-primary text-primary-foreground hover:bg-primary/90",
    variant === "outline" && "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    variant === "light" && "bg-background text-foreground hover:bg-background/90",
    className,
  );
  const label = (
    <>
      {CTA_LABEL}
      {arrow && <ArrowRight aria-hidden className="size-4" />}
    </>
  );
  if (url)
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    );
  return (
    <span className="relative inline-flex flex-col items-start">
      <button
        type="button"
        className={cls}
        onClick={() => {
          setNotice(true);
          setTimeout(() => setNotice(false), 2500);
        }}
      >
        {label}
      </button>
      <span role="status" className="mt-2 h-4 text-xs text-muted-foreground">
        {notice ? "Contato em configuração." : ""}
      </span>
    </span>
  );
}
