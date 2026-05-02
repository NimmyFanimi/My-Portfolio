import { client } from '@/lib/sanity'

async function getAbout() {
  const about = await client.fetch(`*[_type == "about"][0]{
    heading,
    bio
  }`)
  return about
}

export async function AboutSection() {
  const about = await getAbout()

  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed max-w-none">
            <p>{about.bio}</p>
          </div>
        </div>
      </div>
    </section>
  )
}