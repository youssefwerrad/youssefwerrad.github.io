import { useEffect, useRef, useState } from "react";

const offsetMap = {
  up: "translateY(20px)",
  left: "translateX(-20px)",
  right: "translateX(20px)",
};

export const ScrollReveal = ({ children, className, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        filter: visible ? "blur(0px)" : "blur(4px)",
        transform: visible ? "translate(0, 0)" : offsetMap[direction],
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, filter 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
