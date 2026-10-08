import { useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { CTA_LABEL, whatsappUrl } from "../config/site";
export function CtaButton({
  className = "",
  variant = "solid",
  label = CTA_LABEL,
  iconOnly = false,
  placement,
}: {
  className?: string;
  variant?: "solid" | "outline" | "light";
  label?: string;
  iconOnly?: boolean;
  placement:
    "header" | "hero" | "portfolio" | "process" | "final" | "mobile_floating";
}) {
  const [notice, setNotice] = useState(false);
  const url = whatsappUrl();
  const trackClick = () => {
    const detail = {
      event: "whatsapp_cta_click",
      cta_id: `whatsapp_${placement}`,
      cta_location: placement,
      cta_label: label,
      contact_configured: Boolean(url),
    };
    window.dispatchEvent(new CustomEvent("projetoraiz:cta-click", { detail }));
    const analytics = window as Window & {
      dataLayer?: Record<string, unknown>[];
    };
    if (Array.isArray(analytics.dataLayer)) analytics.dataLayer.push(detail);
  };
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
      <a
        href={url}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
        data-cta-id={`whatsapp_${placement}`}
        data-cta-location={placement}
        onClick={trackClick}
      >
        {content}
      </a>
    );
  return (
    <span className="cta-wrap">
      <button
        type="button"
        className={cls}
        data-cta-id={`whatsapp_${placement}`}
        data-cta-location={placement}
        onClick={() => {
          trackClick();
          setNotice(!notice);
        }}
      >
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
