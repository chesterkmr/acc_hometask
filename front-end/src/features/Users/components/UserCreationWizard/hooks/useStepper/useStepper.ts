import { useCallback, useMemo, useState } from "react";

export function useStepper(_components: React.ComponentType[]) {
  if (!_components.length)
    throw new Error("Components list must include at least one component.");

  const [components] = useState(_components);
  const [componentIndex, setComponentIndex] = useState(0);

  const prevComponentIndex = useMemo(
    () => componentIndex - 1,
    [componentIndex]
  );
  const nextComponentIndex = useMemo(
    () => componentIndex + 1,
    [componentIndex]
  );

  const next = useCallback(() => {
    const nextComponent = components[nextComponentIndex];

    if (!nextComponent) return;

    setComponentIndex(nextComponentIndex);
  }, [components, nextComponentIndex]);

  const prev = useCallback(() => {
    const prevComponent = components[prevComponentIndex];

    if (!prevComponent) return;

    setComponentIndex(prevComponentIndex);
  }, [components, prevComponentIndex]);

  const resetStepper = useCallback(() => setComponentIndex(0), []);

  return {
    Component: components[componentIndex],
    next,
    prev,
    resetStepper,
  };
}
