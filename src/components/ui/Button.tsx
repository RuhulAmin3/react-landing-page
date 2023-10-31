type ButtonType = {
  children: React.ReactNode | React.ReactElement | string;
  className: string;
  type?: string;
};
const Button = ({ children, className, type = "button" }: ButtonType) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
