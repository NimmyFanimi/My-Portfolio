import { Metadata } from 'next'
import { ProjectGrid } from '@/components/project-grid'

export const metadata: Metadata = {
  title: 'Work | Nimmy',
  description: 'Sites I\'ve built for local businesses across Hertfordshire and Bedfordshire.',
}

export default function WorkPage() {
  return (
    <div className="noise-bg">
      <section className="grid-bg">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            My work.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground">
            Here are five sites I&apos;ve built for local businesses across the area. Each one was designed from scratch around what that business actually needed.
          </p>
        </div>
      </section>
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <ProjectGrid />
        </div>
      </section>
    </div>
  )
}
