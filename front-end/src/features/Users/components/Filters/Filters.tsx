import { useCallback, useMemo } from "react";
import { UsersFilters } from "../../hooks/useFilters";
import { EmailDomainInput } from "./components/EmailDomainInput";
import debounce from "lodash/debounce";

interface Props {
  values: UsersFilters;
  onChange: (values: UsersFilters) => void;
}

export const Filters = (props: Props) => {
  const { onChange: _onChange, values } = props;

  // wrapping onChange in debounce to prevent execution on every keystroke
  const onChange = useMemo(() => debounce(_onChange, 500), [_onChange]);

  const handleChange = useCallback(
    (name: string, value: string) => {
      onChange({ ...values, [name]: value });
    },
    [values, onChange]
  );

  return (
    <div>
      <EmailDomainInput
        defaultValue={values.byEmailDomain || ""}
        name="byEmailDomain"
        onChange={handleChange}
      />
    </div>
  );
};
