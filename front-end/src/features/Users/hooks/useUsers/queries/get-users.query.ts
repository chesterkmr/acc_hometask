import { gql } from "../../../../../__generated__";

export const GET_USERS = gql(`
query GetUsers($emailDomain: String) {
  users(query: {byEmailDomain: $emailDomain}) {
    id,
    name,
    email
  }
}
`);
