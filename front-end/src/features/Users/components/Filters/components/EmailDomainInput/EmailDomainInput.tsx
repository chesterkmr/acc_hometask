import { useCallback } from "react";

interface Props {
  defaultValue: string;
  name: string;
  onChange: (name: string, value: string) => void;
}

export function EmailDomainInput(props: Props) {
  const { defaultValue, name, onChange } = props;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.name, event.target.value);
    },
    [onChange]
  );

  return (
    <input
      name={name}
      defaultValue={defaultValue}
      type="text"
      placeholder="@example.com"
      onChange={handleChange}
    />
  );
}
