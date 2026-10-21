import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  options: IntersectionObserverInit | undefined;
  observe = vi.fn(() => {});
  unobserve = vi.fn(() => {});
  disconnect = vi.fn(() => {});
  takeRecords = vi.fn(() => [] as IntersectionObserverEntry[]);
  root = null;
  rootMargin = "";
  thresholds: number[] = [];

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit,
  ) {
    this.callback = callback;
    this.options = options;
  }
}

globalThis.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 16);
globalThis.cancelAnimationFrame = (id: number) => clearTimeout(id);
