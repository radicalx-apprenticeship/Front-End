import styles from "./CardContainer.module.css";
import infoIcon from "../../assets/info.svg";
const CardContainer = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <p>{title}</p>
        <img src={infoIcon} alt="info" />
      </div>
      {children}
    </div>
  );
};

export default CardContainer;
