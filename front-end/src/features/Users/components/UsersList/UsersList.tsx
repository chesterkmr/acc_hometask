import { User } from "../../hooks/useUsers";

export interface Props {
  users: User[];
}

export const UsersList = (props: Props) => {
  const { users } = props;

  return users.length ? (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} : {user.email}
        </li>
      ))}
    </ul>
  ) : (
    <div>Users list is empty.</div>
  );
};
