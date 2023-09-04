import Link from 'next/link'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

const routes = [
  {
    href: '/products',
    label: 'Products',
  },
  {
    href: '/laptops',
    label: 'Laptops',
  },
  {
    href: '/keyboards',
    label: 'Keyboards',
  },
  {
    href: '/mice',
    label: 'Mice',
  },
]

export interface CartButtonProps {
  className?: string
}

const Menu: React.FC<CartButtonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        `mx-6 items-center space-x-4 lg:space-x-6 hidden md:flex`,
        className,
      )}
    >
      {routes.map((route, i) => (
        <Button key={i} asChild variant='ghost'>
          <Link
            href={route.href}
            className='text-sm font-medium transition-colors'
          >
            {route.label}
          </Link>
        </Button>
      ))}
    </div>
  )
}

export default Menu
