type TitlebarProps = {
  text: string;
  title: string;
  children: React.ReactNode | React.ReactElement | string;
};
const Titlebar = ({ text, title, children }: TitlebarProps) => {
  return (
    <div className="titlebar">
      <p className="titlebar__text">{text}</p>
      <h2 className="titlebar__title">{title}</h2>
      <p className="titlebar__desc">{children}</p>
    </div>
  );
};

export default Titlebar;
