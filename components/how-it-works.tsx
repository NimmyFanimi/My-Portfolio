const steps = [
  {
    number: '01',
    title: 'We talk.',
    description:
      'You tell me about your business and what you need. No forms, no faff. Just a straightforward conversation.',
  },
  {
    number: '02',
    title: 'I build it.',
    description:
      'I handle everything. Design, copy, images, and deployment. You get a site that looks the part and loads fast.',
  },
  {
    number: '03',
    title: 'You go live.',
    description:
      'Your site goes live on your own domain. I handle hosting for a flat monthly fee, and you get on with running your business.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-20 md:pb-32">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          How it works.
        </h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="mb-4 text-5xl font-bold text-primary">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
