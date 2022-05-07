import { useEffect } from "react";

const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onHover !== 'function') {
      return;
    }
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
      element.current.removeEventListener("mouseenter", onHover)
      }};
  }, [onHover]); // 최초 렌더링시 한번만 실행되게
  return element;
};

export default useHover;