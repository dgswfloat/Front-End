interface BackdropProps {
  children: React.ReactNode,
}

const Backdrop = ({ children }: BackdropProps) => {
  return (
      <div>
        {children}
      </div>
  )
}
