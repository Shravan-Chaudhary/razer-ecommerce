import Image from 'next/image'
import Link from 'next/link'
import { Card, CardFooter, CardContent } from '@/components/ui/card'

import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

const ProductCard = () => {
  return (
    <Link href='/' className='outline-0 focus:ring-2 hover:ring-2 ring-primary'>
      hello
    </Link>
  )
}

export default ProductCard
