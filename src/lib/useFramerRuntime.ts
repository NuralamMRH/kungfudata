import { useEffect } from "react";
import {
  animator,
  initNestedLinks,
  initParamPreservation,
} from "./framer-runtime";
import { appearAnimationsContent, breakpoints } from "./framer-data";

/**
 * Custom hook to initialize Framer runtime behaviors:
 * 1. Appear animations (triggered by data-framer-appear-id)
 * 2. Nested link handling
 * 3. Parameter preservation
 */
export const useFramerRuntime = () => {
  useEffect(() => {
    // 1. Initialize Appear Animations
    const runAppear = () => {
      const activeHash = animator.getActiveVariantHash(breakpoints);

      animator.animateAppearEffects(
        appearAnimationsContent,
        (selector, keyframesByProp, optionsByProp) => {
          const el = document.querySelector(selector) as HTMLElement;
          if (el) {
            for (const [prop, keyframes] of Object.entries(keyframesByProp)) {
              animator.startOptimizedAppearAnimation(
                el,
                prop,
                keyframes,
                (optionsByProp as any)[prop],
              );
            }
          }
        },
        "data-framer-appear-id",
        "__Appear_Animation_Transform__",
        false,
        activeHash,
      );
    };

    // Use requestAnimationFrame as per original script
    requestAnimationFrame(runAppear);

    // 2. Initialize Navigation Helpers
    initNestedLinks();
    initParamPreservation();

    // 3. Optional: Global process env shim (production)
    if (typeof window !== "undefined") {
      (window as any).process = {
        ...(window as any).process,
        env: { ...(window as any).process?.env, NODE_ENV: "production" },
      };
    }
  }, []);
};
