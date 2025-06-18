interface ButtonProps {
  title: string,
  className: string,
  children?: React.ReactNode,
  func?: () => void,
  disabled?: false,
}

const Button = ({ title, children, className, func, disabled }: ButtonProps) => {
  return (
      <button className={className} onChange={func} disabled={disabled}>
        {title}
        {children}
      </button>
  )
}

export default Button;
