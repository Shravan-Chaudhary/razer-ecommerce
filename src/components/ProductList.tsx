import ProductCard from './ProductCard'
import { Product } from '@/types'

interface ProductListProps {
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
