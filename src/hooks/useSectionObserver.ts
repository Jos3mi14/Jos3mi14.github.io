import { useEffect, useState, useRef, useCallback } from "react";

interface UseSectionObserverOptions {
  rootMargin?: string;
  threshold?: number | number[];
}

export function useSectionObserver(
  sectionIds: string[],
  options: UseSectionObserverOptions = {},
) {
  const { rootMargin = "-200px 0px -60% 0px", threshold = 0 } = options;
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "hero");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionElementsRef = useRef<Map<string, HTMLElement>>(new Map());

  const updateSectionElements = useCallback(() => {
    sectionElementsRef.current.clear();
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionElementsRef.current.set(id, el);
    });
  }, [sectionIds]);

  useEffect(() => {
    updateSectionElements();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin, threshold },
    );

    observerRef.current = observer;
    sectionElementsRef.current.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold, updateSectionElements]);

  useEffect(() => {
    updateSectionElements();
    if (observerRef.current) {
      observerRef.current.disconnect();
      sectionElementsRef.current.forEach((el) =>
        observerRef.current?.observe(el),
      );
    }
  }, [sectionIds, updateSectionElements]);

  return activeSection;
}

export function useScrolled(threshold = 100) {
  const [scrolled, setScrolled] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(() => {
          setScrolled(window.pageYOffset > threshold);
          tickingRef.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
