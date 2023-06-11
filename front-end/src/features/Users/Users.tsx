import styles from "./Users.module.css";
import { useUsers } from "./hooks/useUsers";
import { UsersList } from "./components/UsersList";
import { Filters } from "./components/Filters";
import { useFilters } from "./hooks/useFilters";
import { UserCreationWizard } from "./components/UserCreationWizard";
import { useCallback, useRef } from "react";
import {
  UserCreationPayload,
  UserCreationWizardRef,
} from "./components/UserCreationWizard/types";

export const Users = () => {
  const { filters, setFilters } = useFilters();
  const { users, isLoading, isCreating, createUser, reload } =
    useUsers(filters);

  const userCreationWizardRef = useRef<UserCreationWizardRef>(null);

  const handleSubmit = useCallback(
    async (payload: UserCreationPayload) => {
      await createUser({
        variables: {
          email: payload.email,
          name: payload.name,
          password: payload.password,
        },
      });
      reload();

      // reseting wizard
      if (userCreationWizardRef.current) {
        userCreationWizardRef.current.reset();
      }
    },
    [userCreationWizardRef, createUser, reload]
  );

  return (
    <div className={styles.users}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h2>Filters</h2>
          <Filters values={filters} onChange={setFilters} />
        </div>
        <div className={styles.usersList}>
          <h2>Users</h2>
          <div className={styles.usersListWrapper}>
            {isLoading ? (
              <span>Loading users list...</span>
            ) : (
              <UsersList users={users} />
            )}
          </div>
        </div>
      </div>
      <div className={styles.addUser}>
        <UserCreationWizard
          ref={userCreationWizardRef}
          isLoading={isCreating}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
