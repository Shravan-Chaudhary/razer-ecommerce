'use client'

import { Button } from './ui/button'
import { Icons } from './ui/icons'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant='ghost'
      size='icon'
      aria-label='Toggle Theme'
      className='mr-2'
    >
      <Icons.lightMode className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Icons.darkMode className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  )
}

export default ThemeToggle
