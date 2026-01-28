import React, { PropsWithChildren, useEffect, useState } from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: React.ElementType; // ✅ supports "div" and components
  childTag?: React.ElementType;   // ✅ supports "div" and components
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const transitionDuration = props.transitionDuration ?? 400;
  const delay = props.delay ?? 50;

  const WrapperTag: React.ElementType = props.wrapperTag ?? "div";
  const ChildTag: React.ElementType = props.childTag ?? "div";

  const visible = typeof props.visible === "undefined" ? true : props.visible;

  useEffect(() => {
    let count = React.Children.count(props.children);
    if (!visible) count = 0;

    if (count === maxIsVisible) {
      const timeout = setTimeout(() => {
        props.onComplete?.();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible((v) => v + increment); // ✅ use functional update
    }, delay);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [React.Children.count(props.children), delay, maxIsVisible, visible, transitionDuration]);

  return (
    <WrapperTag className={props.className}>
      {React.Children.map(props.children, (child, i) => (
        <ChildTag
          key={(child as any)?.key ?? i} // ✅ key prevents reconciliation issues
          className={props.childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
            transform: maxIsVisible > i ? "none" : "translateY(20px)",
            opacity: maxIsVisible > i ? 1 : 0,
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
}
