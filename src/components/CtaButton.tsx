import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CTA_LABEL, whatsappUrl } from "../config/site";
export function CtaButton({
  className = "",
  variant = "solid",
}: {
  className?: string;
  variant?: "solid" | "outline" | "light";
  arrow?: boolean;
}) {
  const [notice, setNotice] = useState(false);
  const url = whatsappUrl();
  const cls = `cta cta-${variant} ${className}`;
  const content = (
    <>
      {CTA_LABEL}
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
      <button type="button" className={cls} onClick={() => setNotice(true)}>
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
