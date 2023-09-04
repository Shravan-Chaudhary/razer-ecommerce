import { Button } from '../ui/button'
import Container from '../ui/container'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-3 px-4 border-b'>
      <Container>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
          {/* Logo */}
          <div className='flex items-center'>
            <Logo />
          </div>

          {/* Menu */}
          <Menu />
          {/* Shopping Cart */}
          <div className='flex items-center'>
            <Button
              variant='ghost'
              size='icon'
              className='mr-2'
              aria-label='Shopping Cart'
            >
              <span className='sr-only'>Shopping Cart</span>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
