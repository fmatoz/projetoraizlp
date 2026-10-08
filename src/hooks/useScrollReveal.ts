import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      ".material-strip, .project-heading, .carousel, .project-link, .essence-grid > div:first-child, .feature-list article, .process-photo, .process-copy, .reviews-heading, .review-card, .reviews-footnote, .faq > div, .contact-inner"
    ));
    const reveal = (element: HTMLElement) => {
      element.classList.add("is-revealed");
      element.classList.remove("reveal-pending");
    };
    if (media.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
    elements.forEach(element => {
      const bounds = element.getBoundingClientRect();
      // Keep the initial viewport and anchor destinations readable immediately.
      if (bounds.top < window.innerHeight && bounds.bottom > 0) return;
      element.classList.add("reveal-pending");
      if (element.matches(".feature-list article, .review-card")) {
        const index = Array.from(element.parentElement!.children).indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.min(index, 2) * 80}ms`);
      }
      observer.observe(element);
    });
    const onPreferenceChange = () => {
      if (media.matches) {
        elements.forEach(reveal);
        observer.disconnect();
      }
    };
    const onFocus = (event: FocusEvent) => {
      const target = event.target as HTMLElement;
      const parent = target.closest<HTMLElement>(".reveal-pending");
      if (parent) { reveal(parent); observer.unobserve(parent); }
    };
    media.addEventListener("change", onPreferenceChange);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("focusin", onFocus);
      elements.forEach(element => {
        element.classList.remove("reveal-pending", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);
}
