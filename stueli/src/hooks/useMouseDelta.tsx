import { useCallback, useEffect, useRef, useState } from 'react';

export const useMouseDelta = (initialWidth: any) => {
  const [result, setResult] = useState(initialWidth);
  const dragging = useRef(false);
  //   const previousClientX = useRef(0);
  let offsetX: number;

  const handleMouseMove = useCallback(
    (e: { clientX: number }) => {
      if (!dragging.current) {
        return;
      }

      setResult((oldResult: number) => {
        const change = e.clientX - offsetX;
        offsetX = e.clientX;
        return oldResult + change;
      });
    },
    [dragging],
  );

  const handleMouseDown = useCallback((e: { clientX: number }) => {
    offsetX = e.clientX;
    offsetX = e.clientX;
    dragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseDown, handleMouseUp, handleMouseMove]);

  return { result, handleMouseDown, handleMouseMove, handleMouseUp };
};
