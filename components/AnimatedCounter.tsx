"use client";
import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function AnimatedCounter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span className="pr-1" ref={nodeRef} />;
}

export default AnimatedCounter;
