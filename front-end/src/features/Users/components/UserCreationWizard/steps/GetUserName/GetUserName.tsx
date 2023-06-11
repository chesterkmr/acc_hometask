import { useCallback } from "react";
import { NavigationButton } from "../../components/NavigationButton/NavigationButton";
import { NavigationLayout } from "../../components/NavigationLayout";
import { useCreationWizard } from "../../useCreationWizard";

export const GetUserName = () => {
  const { userCreationPayload, update, next } = useCreationWizard();

  const handelChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      update({ [event.target.name]: event.target.value });
    },
    [update]
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
    >
      <input
        type="text"
        name="name"
        required
        value={userCreationPayload.name}
        placeholder="John Doe"
        onChange={handelChange}
      />
      <NavigationLayout nextElement={<NavigationButton action="next" />} />
    </form>
  );
};
