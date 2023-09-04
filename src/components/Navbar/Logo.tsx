import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href='/'
      className={cn(`text-xl font-bold md:block lg:ml-0`, className)}
    >
      <h1>Razer</h1>
    </Link>
  )
}

export default Logo
