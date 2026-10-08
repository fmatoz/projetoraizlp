import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { CTA_LABEL, whatsappUrl } from "../config/site";
export function CtaButton({
  className = "",
  variant = "solid",
  label = CTA_LABEL,
  iconOnly = false,
}: {
  className?: string;
  variant?: "solid" | "outline" | "light";
  label?: string;
  iconOnly?: boolean;
}) {
  const [notice, setNotice] = useState(false);
  const url = whatsappUrl();
  const cls = `cta cta-${variant} ${className}`;
  const content = iconOnly ? (
    <>
      <MessageCircle size={25} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </>
  ) : (
    <>
      {label}
      <ArrowUpRight size={19} aria-hidden="true" />
    </>
  );
  if (url)
    return (
      <a href={url} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  return (
    <span className="cta-wrap">
      <button type="button" className={cls} onClick={() => setNotice(!notice)}>
        {content}
      </button>
      {notice && (
        <span role="status" className="cta-notice">
          Contato em configuração.
        </span>
      )}
    </span>
  );
}
