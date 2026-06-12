export function scrollToSection(id: string, offset = 80): void {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - offset,
      behavior: "smooth",
    });
  }
}

export function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  offset = 80,
): void {
  if (href.startsWith("#")) {
    e.preventDefault();
    const id = href.slice(1);
    scrollToSection(id, offset);
  }
}
