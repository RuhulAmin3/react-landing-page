type ButtonType = {
  children: React.ReactNode | React.ReactElement | string;
  className: string;
  type?: string;
};
const Button = ({ children, className, type = "button" }: ButtonType) => {
  return type ? (
    <button type="submit" className={className}>
      {children}
    </button>
  ) : (
    <button className={className}>{children}</button>
  );
};

export default Button;
