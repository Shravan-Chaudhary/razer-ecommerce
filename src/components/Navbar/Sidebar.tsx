import Link from 'next/link'
import { Icons } from '../ui/icons'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet'
import Logo from './Logo'

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Icons.menu className='h-6 w-6 md:hidden' />
      </SheetTrigger>
      <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
        <SheetHeader>
          <SheetTitle>
            <Logo className='text-2xl' />
          </SheetTitle>
        </SheetHeader>
        <nav className='flex flex-col gap-4 mt-4'>
          <Link href='/products' className='block px-2 py-1 text-lg'>
            Products
          </Link>
          <Link href='/laptops' className='block px-2 py-1 text-lg'>
            Laptops
          </Link>
          <Link href='/keyboards' className='block px-2 py-1 text-lg'>
            Keyboards
          </Link>
          <Link href='/mice' className='block px-2 py-1 text-lg'>
            Mice
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar
