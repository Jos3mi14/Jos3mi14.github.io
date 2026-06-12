import { useCallback } from "react";
import { scrollToSection } from "../utils/scrollUtils";

export function useSmoothScroll(defaultOffset = 80) {
  const scrollTo = useCallback(
    (id: string, offset = defaultOffset) => {
      scrollToSection(id, offset);
    },
    [defaultOffset],
  );

  const handleAnchorClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      href: string,
      offset = defaultOffset,
    ) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const id = href.slice(1);
        scrollToSection(id, offset);
      }
    },
    [defaultOffset],
  );

  return { scrollTo, handleAnchorClick };
}
