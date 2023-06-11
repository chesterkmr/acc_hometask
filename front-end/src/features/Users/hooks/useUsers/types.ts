export interface User {
  id: string;
  name: string;
  email: string;
}

export interface GetUsersQuery {
  users: User[];
}
