'use client';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * IntroContext reports nothing now but can be extended later.
 */
const IntroContext = createContext({});

type IntroProviderProps = { children?: React.ReactNode };

export default function IntroProvider({ children }: IntroProviderProps) {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // On route change, clear any per-element markers so the next page can animate again
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-intro]'));
    els.forEach((el) => {
      delete el.dataset.introPlayed;
      el.classList.remove('intro-visible');
    });
  }, [pathname]);

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          // If this element already played during this navigation, stop observing it
          if (el.dataset.introPlayed === 'true') {
            observerRef.current?.unobserve(el);
            return;
          }
          el.classList.add('intro-visible');
          el.dataset.introPlayed = 'true';
          // we can unobserve to save work
          observerRef.current?.unobserve(el);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, { threshold: 0.15 });

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-intro]'));
    els.forEach((el) => {
      if (el.dataset.introPlayed === 'true') {
        el.classList.add('intro-visible');
        return;
      }
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  return (
    <IntroContext.Provider value={{}}>
      <div>{children}</div>
    </IntroContext.Provider>
  );
}

export const useIntro = () => useContext(IntroContext);
