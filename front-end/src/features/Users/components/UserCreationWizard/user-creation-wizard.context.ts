import { createContext } from "react";
import { UserCreationWizardContext } from "./types";

export const userCreationWizardContext = createContext(
  {} as UserCreationWizardContext
);
