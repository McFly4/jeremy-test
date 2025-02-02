"use client";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function Grid() {
  return (
    <InteractiveGridPattern
      className={cn(
        "[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]",
      )}
      width={60}
      height={60}
      squares={[30, 30]}
      squaresClassName="hover:fill-white-500"
    />
  );
}
