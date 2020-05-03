import { useEffect, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

interface ResizeObserverCallback {
  /**
   * A `DOMRectReadOnly` object containing the new size of the observed element.
   */
  contentRect: DOMRectReadOnly;
  /**
   * Unobserves the observed element.
   */
  disconnect: () => void;
}

/**
 * Observes changes in the size of an element using the `ResizeObserver` API.
 */
export const useResizeObserver = (
  ref: RefObject<Element>,
  callback: (params: ResizeObserverCallback) => void
): void => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      callback({
        contentRect: entries[0].contentRect as DOMRectReadOnly,
        disconnect: () => resizeObserver.disconnect(),
      });
    });
    resizeObserver.observe(ref.current as Element);
    return (): void => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
