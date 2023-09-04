import ThemeToggle from '../ThemeToggle'
import Container from '../ui/container'
import CartButton from './CartButton'
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
          <div className='flex items-center'>
            {/* Shopping Cart */}
            <CartButton />
            {/* Theme Toggler Button */}
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
