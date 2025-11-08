import { Link as TanStackLink, LinkProps } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

interface CustomLinkProps extends Omit<LinkProps, 'to'> {
  to: string
  className?: string
  children: React.ReactNode
}

export default function Link({ to, className, children, ...props }: CustomLinkProps) {
  return (
    <TanStackLink 
      to={to as any} 
      className={cn(className)} 
      {...props}
    >
      {children}
    </TanStackLink>
  )
}