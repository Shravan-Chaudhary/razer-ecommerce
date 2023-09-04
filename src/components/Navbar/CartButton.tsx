import { Icons } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'

export interface CartButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const CartButton: React.FC<CartButtonProps> = ({ className }) => {
  return (
    <Button
      variant='ghost'
      size='icon'
      className='mr-2'
      aria-label='Shopping Cart'
    >
      <Icons.cart className='w-6 h-6' />
      <span className='sr-only'>Shopping Cart</span>
    </Button>
  )
}

export default CartButton
