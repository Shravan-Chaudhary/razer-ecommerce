import { Icons } from './ui/icons'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Product } from '@/types'
import Link from 'next/link'

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
  variant?: 'default' | 'switchable'
}

const ProductCard2 = ({
  product,
  variant = 'default',
  className,
  ...props
}: ProductCardProps) => {
  return (
    <Card>
      <Link
        href={`/product/${product.id}`}
        aria-label={`View ${product.name} details`}
      >
        <CardHeader></CardHeader>
      </Link>
    </Card>
  )
}

export default ProductCard2
