import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row md:gap-0">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Nimmy
          </span>
          <a 
            href="mailto:nimmy.webdesign@gmail.com" 
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            nimmy.webdesign@gmail.com
          </a>
        </div>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
