"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Options = {
  length: number;
  enabled?: boolean;
  /** Return false to consume the "next" gesture without changing slides. */
  beforeNext?: (index: number) => boolean;
};

export function useDeckNavigation({
  length,
  enabled = true,
  beforeNext,
}: Options) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const cooldown = useRef(false);
  const pointerX = useRef<number | null>(null);
  const beforeNextRef = useRef(beforeNext);

  useEffect(() => {
    beforeNextRef.current = beforeNext;
  }, [beforeNext]);

  const go = useCallback(
    (nextIndex: number, nextDirection?: number) => {
      const clamped = Math.max(0, Math.min(length - 1, nextIndex));
      if (clamped === index) return;
      setDirection(nextDirection ?? (clamped > index ? 1 : -1));
      setIndex(clamped);
    },
    [index, length],
  );

  const next = useCallback(() => {
    if (beforeNextRef.current && !beforeNextRef.current(index)) return;
    go(index + 1, 1);
  }, [go, index]);

  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  const pulse = useCallback((fn: () => void) => {
    if (cooldown.current) return;
    cooldown.current = true;
    fn();
    window.setTimeout(() => {
      cooldown.current = false;
    }, 520);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, button, a") && event.key === " ") {
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === " ") {
        event.preventDefault();
        pulse(next);
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        pulse(prev);
      }
      if (event.key === "Home") {
        event.preventDefault();
        go(0, -1);
      }
      if (event.key === "End") {
        event.preventDefault();
        go(length - 1, 1);
      }
    }

    function onWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) < 28 && Math.abs(event.deltaX) < 28) return;
      event.preventDefault();
      const delta =
        Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      pulse(delta > 0 ? next : prev);
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, [enabled, go, length, next, prev, pulse]);

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    if ((event.target as HTMLElement).closest("button, a, input, textarea")) {
      pointerX.current = null;
      return;
    }
    pointerX.current = event.clientX;
  }, []);

  const onPointerUp = useCallback(
    (event: React.PointerEvent) => {
      if ((event.target as HTMLElement).closest("button, a, input, textarea")) {
        pointerX.current = null;
        return;
      }
      if (pointerX.current === null) return;
      const dx = event.clientX - pointerX.current;
      pointerX.current = null;
      if (Math.abs(dx) < 56) return;
      pulse(dx < 0 ? next : prev);
    },
    [next, prev, pulse],
  );

  return {
    index,
    direction,
    next,
    prev,
    go,
    atStart: index === 0,
    atEnd: index === length - 1,
    swipeHandlers: {
      onPointerDown,
      onPointerUp,
    },
  };
}
