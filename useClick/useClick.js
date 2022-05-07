import { useEffect } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
      element.current.removeEventListener("click", onClick)
      }};
  }, [onClick]); // 최초 렌더링시 한번만 실행되게
  return element;
};

export default useClick;