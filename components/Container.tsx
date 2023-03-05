import clsx from 'clsx'

interface ContainerProps extends WithChildren<JSX.Element> {
  className?: string
  as?: string
  id?: string
}

const inner = ({ children, className, as = 'div', id }: ContainerProps) => {
  const Wrapper = as as keyof JSX.IntrinsicElements

  return (
    <Wrapper
      className={clsx('container mx-auto px-4 sm:px-6 lg:px-8', className)}
      id={id}
    >
      {children}
    </Wrapper>
  )
}

const outer = ({ children, className, as = 'div', id }: ContainerProps) => {
  const Wrapper = as as keyof JSX.IntrinsicElements

  return (
    <Wrapper
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      id={id}
    >
      {children}
    </Wrapper>
  )
}

export const Container = {
  outer,
  inner,
}
