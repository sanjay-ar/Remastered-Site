import { useEffect, useState } from "react";

const useDocTitle = title => {
  const [doctitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = doctitle;
  }, [doctitle]);

  return [doctitle, setDocTitle];
};

export {useDocTitle};

export const use3DRotation = (ref) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    let isMouseDown = false;
    let previousPosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isMouseDown = true;
      previousPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isMouseDown) return;

      const deltaX = e.clientX - previousPosition.x;
      const deltaY = e.clientY - previousPosition.y;

      setRotation(prev => ({
        x: prev.x + deltaY * 0.5,
        y: prev.y + deltaX * 0.5
      }));

      previousPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    element.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [ref]);

  return rotation;
};