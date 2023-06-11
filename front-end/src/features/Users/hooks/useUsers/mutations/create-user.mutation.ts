import { gql } from "../../../../../__generated__";

export const CREATE_USER = gql(`
mutation CreateUser($name: String!, $email: String!, $password: String!) {
  createUser(dto: {name: $name, email: $email, password: $password}) {
    id
  }
}`);
