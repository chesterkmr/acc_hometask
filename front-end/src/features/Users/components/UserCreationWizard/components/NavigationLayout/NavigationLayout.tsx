import { useCreationWizard } from "../../useCreationWizard";
import styles from "./NavigationLayout.module.css";

interface Props {
  prevElement?: React.ReactNode;
  nextElement?: React.ReactNode;
}

export const NavigationLayout = (props: Props) => {
  const { prevElement = null, nextElement = null } = props;

  const { isLoading } = useCreationWizard();

  return (
    <div className={styles.navigationLayout}>
      <div className={styles.left}>{prevElement}</div>
      <div className={styles.loader}>
        {isLoading ? <span>Loading...</span> : null}
      </div>
      <div className={styles.right}>{nextElement}</div>
    </div>
  );
};
