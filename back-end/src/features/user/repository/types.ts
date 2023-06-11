export interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface FindUsersParams {
  byEmailDomain?: string;
}

export interface FindUserParams {
  id?: string;
  email?: string;
}
