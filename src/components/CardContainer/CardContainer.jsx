import styles from "./CardContainer.module.css";
import infoIcon from "../../assets/info.svg";
const CardContainer = ({ title, children, headerButton }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__titleContainer}>
          <p>{title}</p>
          {headerButton}
        </div>
        <img src={infoIcon} alt="info" />
      </div>
      {children}
    </div>
  );
};

export default CardContainer;
