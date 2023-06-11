interface Props {
  action: "prev" | "next";
  onClick?: () => void;
}

export const NavigationButton = (props: Props) => {
  const { action, onClick } = props;

  return (
    <button type="submit" onClick={onClick ? onClick : undefined}>
      {action === "prev" ? "Prev" : "Next"}
    </button>
  );
};
