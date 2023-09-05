import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className='flex space-x-12 items-center'>
      <Button>Submit</Button>
      <ProductCard />
    </main>
  )
}
