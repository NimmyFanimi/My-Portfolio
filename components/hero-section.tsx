import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative grid-bg">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Your local business deserves a website that actually works for you.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl text-pretty">
            I build fast, professional websites for small businesses across the country. Fixed price, no jargon, no ongoing surprises.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/work">See my work.</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
