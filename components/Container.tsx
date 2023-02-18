import clsx from 'clsx'

interface ContainerProps extends WithChildren<JSX.Element> {
  className?: string
}

const inner = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('container mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

const outer = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export const Container = {
  inner,
  outer,
}
