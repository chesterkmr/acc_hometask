export interface UserCreationPayload {
  name: string;
  email: string;
  password: string;
}

export interface UserCreationWizardContext {
  userCreationPayload: UserCreationPayload;
  isLoading: boolean;
  update: (payload: Partial<UserCreationPayload>) => void;
  prev: () => void;
  next: () => void;
  submit: (payload: UserCreationPayload) => void;
}

export type UserCreationWizardRef = { reset: () => void };
