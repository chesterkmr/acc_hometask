import styles from "./UserCreationWizard.module.css";
import { forwardRef, useCallback, useImperativeHandle, useMemo } from "react";
import { useStepper } from "./hooks/useStepper/useStepper";
import { useUserCreationValues } from "./hooks/useUserCreationValues/useUserCreationValues";
import {
  UserCreationPayload,
  UserCreationWizardContext,
  UserCreationWizardRef,
} from "./types";
import { userCreationWizardContext } from "./user-creation-wizard.context";
import { GetUserName } from "./steps/GetUserName";
import { GetUserCredentials } from "./steps/GetUserCredentials";

const { Provider } = userCreationWizardContext;

interface Props {
  isLoading?: boolean;
  onSubmit: (userCreationPayload: UserCreationPayload) => void;
}

export const UserCreationWizard = forwardRef<UserCreationWizardRef, Props>(
  (props, ref) => {
    const { isLoading, onSubmit } = props;

    const { Component, prev, next, resetStepper } = useStepper([
      GetUserName,
      GetUserCredentials,
    ]);
    const { values, update, reset } = useUserCreationValues();

    // exposing internal API via ref
    useImperativeHandle(
      ref,
      () => ({
        reset: () => {
          reset();
          resetStepper();
        },
      }),
      [reset, resetStepper]
    );

    const submit = useCallback(() => {
      onSubmit(values);
    }, [values, onSubmit]);

    const context = useMemo(() => {
      const ctx: UserCreationWizardContext = {
        userCreationPayload: values,
        isLoading: Boolean(isLoading),
        prev,
        next,
        update,
        submit,
      };

      return ctx;
    }, [prev, next, update, submit, values, isLoading]);

    return (
      <Provider value={context}>
        <div className={styles.userCreationWizard}>
          <div className={styles.step}>
            <Component />
          </div>
        </div>
      </Provider>
    );
  }
);
