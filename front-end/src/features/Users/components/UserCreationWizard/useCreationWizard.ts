import { useContext } from "react";
import { userCreationWizardContext } from "./user-creation-wizard.context";

export function useCreationWizard() {
  return useContext(userCreationWizardContext);
}
