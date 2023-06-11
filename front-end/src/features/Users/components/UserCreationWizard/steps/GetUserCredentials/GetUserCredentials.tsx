import { useCallback } from "react";
import { NavigationButton } from "../../components/NavigationButton/NavigationButton";
import { NavigationLayout } from "../../components/NavigationLayout";
import { useCreationWizard } from "../../useCreationWizard";

export const GetUserCredentials = () => {
  const { userCreationPayload, prev, update, submit } = useCreationWizard();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      update({ [event.target.name]: event.target.value });
    },
    [update]
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(userCreationPayload);
      }}
    >
      <input
        type="email"
        name="email"
        value={userCreationPayload.email}
        placeholder="mail@example.com"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userCreationPayload.password}
        required
        onChange={handleChange}
      />
      <NavigationLayout
        prevElement={<NavigationButton action="prev" onClick={prev} />}
        nextElement={<NavigationButton action="next" />}
      />
    </form>
  );
};
