import { RefObject } from 'react';
import { useResizeObserver } from './useResizeObserver';

/**
 * Executes a callback function when the shadow root of the UI5 Web Component is available
 */
export const useShadowRootMount = (
  ref: RefObject<HTMLElement>,
  callback: (shadowRoot: ShadowRoot) => void
): void => {
  // Sometimes, when React.useEffect is called, not all UI5 Web Components have their shadow root available.
  // If the shadow root is available, the component has size (width and height), otherwise it does not.
  // It is possible to use the ResizeObserver API to identify when the shadow root is available (it has
  // size) and notify the component.
  useResizeObserver(ref, ({ disconnect }) => {
    if (ref.current && ref.current.shadowRoot) {
      callback(ref.current.shadowRoot);
    }
    disconnect();
  });
};
