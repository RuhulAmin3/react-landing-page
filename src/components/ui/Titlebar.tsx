import styles from "../../styles/_titlebar.module.scss";
type TitlebarProps = {
  text: string;
  title: string;
  children?: React.ReactNode | React.ReactElement | string;
};
const Titlebar = ({ text, title, children }: TitlebarProps) => {
  return (
    <div className={`${styles["titlebar"]}`}>
      <p className={`${styles["titlebar__text"]}`}>{text}</p>
      <h2 className={`${styles["titlebar__title"]}`}>{title}</h2>
      {children && <p className={`${styles["titlebar__desc"]}`}>{children}</p>}
    </div>
  );
};

export default Titlebar;
