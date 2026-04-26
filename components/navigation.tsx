'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            {/* Handle - elongated tapered shape */}
            <path 
              d="M20 1C21 2 21.5 3 21.5 4C21.5 6 19 10 16 13L13 10C16 7 20 4.5 22 4.5C21 3.5 20 3 19 3C18 3 15 5 12.5 7.5L10 5C12.5 2.5 17 0 20 1Z" 
              fill="#3b82f6"
            />
            {/* Ferrule - thin band */}
            <rect 
              x="10.5" 
              y="11.5" 
              width="4" 
              height="1.5" 
              rx="0.5"
              transform="rotate(-45 10.5 11.5)" 
              fill="#3b82f6"
            />
            {/* Bristles - round tapered tip with natural brush shape */}
            <path 
              d="M10 12C9 13 7 15 5 17C4 18 3 19.5 3 20.5C3 21.5 3.5 22 4.5 22C5.5 22 7 21 8 20C10 18 12 16 13 15L10 12Z" 
              fill="#3b82f6"
            />
            {/* Bristle detail lines */}
            <path 
              d="M5 17.5Q4 19 4.5 20M7 16Q5.5 18 6 19.5M9 14Q7.5 16 8 17.5" 
              stroke="#3b82f6" 
              strokeWidth="0.5" 
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
          </svg>
          Nimmy
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
