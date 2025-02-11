"use client";

// Mimic the hook returned by `create`
import { useContext } from "react";
import { useStore } from "zustand";
import type { ActivityState } from "./_store";
import { ActivityContext } from "./_store";

export function useSkillsContext<T>(selector: (state: ActivityState) => T): T {
  const store = useContext(ActivityContext);
  if (!store) throw new Error("Missing BearContext.Provider in the tree");
  return useStore(store, selector);
}
