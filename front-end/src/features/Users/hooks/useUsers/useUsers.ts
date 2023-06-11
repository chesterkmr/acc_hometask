import { useMutation, useQuery } from "@apollo/client";
import { useMemo } from "react";
import { UsersFilters } from "../useFilters";
import { CREATE_USER } from "./mutations/create-user.mutation";
import { GET_USERS } from "./queries/get-users.query";
import { GetUsersQuery } from "./types";

export function useUsers(filters: UsersFilters) {
  const { data, loading, client } = useQuery<GetUsersQuery>(GET_USERS, {
    variables: {
      emailDomain: filters.byEmailDomain,
    },
  });
  const [createUser, { loading: isCreating }] = useMutation(CREATE_USER);

  const users = useMemo(() => {
    return data && data.users ? data.users : [];
  }, [data]);

  return {
    isLoading: loading,
    isCreating,
    users,
    createUser,
    reload: client.resetStore,
  };
}
