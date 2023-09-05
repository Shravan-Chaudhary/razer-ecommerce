import ProductList from '@/components/ProductList'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: '1',
    category: 'Camera',
    name: 'Sony FX3',
    price: '$3,999.00',
    images: ['/images/FX3.png'],
  },
  {
    id: '2',
    category: 'Camera',
    name: 'Sony A7S III',
    price: '$3,499.00',
    images: ['/images/7SIII.png'],
  },
  {
    id: '3',
    category: 'Camera',
    name: 'Sony A7C',
    price: '$1,599.00',
    images: ['/images/7C.png'],
  },
  {
    id: '4',
    category: 'Camera',
    name: 'Sony A7 IV',
    price: '$2,399.00',
    images: ['/images/7IV.png'],
  },
  {
    id: '5',
    category: 'Camera',
    name: 'Sony A7R III',
    price: '$2,499.00',
    images: ['/images/7RIII.png'],
  },
  {
    id: '6',
    category: 'Camera',
    name: 'Sony A7R V',
    price: '$3,899.00',
    images: ['/images/7RV.png'],
  },
  {
    id: '7',
    category: 'Camera',
    name: 'Sony A6700',
    price: '$1,799.00',
    images: ['/images/6700.png'],
  },
  {
    id: '8',
    category: 'Camera',
    name: 'Sony AZV-E10',
    price: '$699.00',
    images: ['/images/ZVE10.png'],
  },
]

export default function Home() {
  return (
    <main className='flex justify-center items-center mt-6 md:mt-8'>
      <ProductList items={products} />
    </main>
  )
}
