import Link from 'next/link'
import { Button } from '../ui/button'

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

const Menu = () => {
  return (
    <div className='mx-6 items-center space-x-4 lg:space-x-6 hidden md:flex'>
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
