import { useCallback, useState } from "react";
import { UserCreationPayload } from "../../types";

export function useUserCreationValues(
  initialValues: UserCreationPayload = { email: "", password: "", name: "" }
) {
  const [values, setValues] = useState(initialValues);

  const reset = useCallback(() => setValues(initialValues), [initialValues]);

  const update = useCallback((values: Partial<UserCreationPayload>) => {
    setValues((prev) => ({ ...prev, ...values }));
  }, []);

  return {
    values,
    update,
    reset,
  };
}
