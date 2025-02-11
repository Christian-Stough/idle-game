"use client";
import { useRef } from "react";
import type { ActivityProps, ActivityStore } from "./_store";

import { ActivityContext, createActivityStore } from "./_store";

type ActivityProviderProps = React.PropsWithChildren<ActivityProps>;

export function ActivityProvider({
  children,
  ...props
}: ActivityProviderProps) {
  const storeRef = useRef<ActivityStore>();
  if (!storeRef.current) {
    storeRef.current = createActivityStore(props);
  }
  return (
    <ActivityContext.Provider value={storeRef.current}>
      {children}
    </ActivityContext.Provider>
  );
}
