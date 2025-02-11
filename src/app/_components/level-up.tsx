"use client";

import JSConfetti from "js-confetti";
import { useEffect, useState } from "react";

export function useConfetti() {
  const [jsConfetti, setJsConfetti] = useState<JSConfetti | null>(null);

  useEffect(() => {
    setJsConfetti(new JSConfetti());
  }, []);

  const triggerConfetti = (options = {}) => {
    void jsConfetti?.addConfetti(options);
  };

  return { triggerConfetti };
}

// Usage in component:
export default function CelebrationComponent() {
  const { triggerConfetti } = useConfetti();

  return <button onClick={() => triggerConfetti()}>Celebrate! 🎉</button>;
}
