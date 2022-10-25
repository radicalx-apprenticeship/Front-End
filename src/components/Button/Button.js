import styles from "./button.module.css";
const Button = ({
  children,
  icon,
  onClick,
  style,
  href,
  className,
  disabled,
  small,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (href) {
      window.location.href = href;
    }
  };
  return (
    <button
      className={`${styles.btn} ${disabled ? styles["btn--disabled"] : ""} 
      ${small ? styles["btn--small"] : ""} ${className || ""}`}
      onClick={handleClick}
      style={style}
    >
      {icon && <img src={icon} alt="" />}
      {children}
    </button>
  );
};

export default Button;
