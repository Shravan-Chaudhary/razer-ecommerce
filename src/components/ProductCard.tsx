import Image from 'next/image'
import Link from 'next/link'
import { Card, CardFooter, CardContent } from '@/components/ui/card'

import { Product } from '@/types'

interface ProductCardProps {
  data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <Link href='/' className='outline-0 p-4'>
      <Card className='rounded-lg border-2 border-[#555555] w-[300px]'>
        <CardContent className='pt-4'>
          <div className='aspect-square relative bg-foreground/5 dark:bg-background rounded-lg'>
            <Image
              src={data.images?.[0]}
              fill
              alt='laptop-image'
              className='aspect-square object-cover rounded-lg transition-all duration-500 hover:scale-125'
            />
          </div>
        </CardContent>
        <CardFooter className='flex-col items-start'>
          <div>
            <p className='font-semibold text-lg'>{data.name}</p>
            <p className='text-sm text-primary/80'>{data.category}</p>
          </div>
          <div className='flex items-center justify-between'>{data?.price}</div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ProductCard
