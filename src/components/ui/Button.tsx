type ButtonType = {
  children: React.ReactNode | React.ReactElement | string;
  className: string;
};
const Button = ({ children, className }: ButtonType) => {
  return <button className={className}>{children}</button>;
};

export default Button;
