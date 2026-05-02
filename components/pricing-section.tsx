import { client } from '@/lib/sanity'
import { cn } from '@/lib/utils'

async function getPricing() {
  const plans = await client.fetch(`*[_type == "pricing"] | order(_createdAt asc){
    tier,
    price,
    description,
    highlighted
  }`)
  return plans
}

export async function PricingSection() {
  const plans = await getPricing()

  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Pricing:
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {plans.map((plan: any) => (
            <div
              key={plan.tier}
              className={cn(
                'relative rounded-lg border border-border/60 bg-card p-8 transition-all',
                plan.highlighted && 'border-primary ring-1 ring-primary'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Most popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-primary">{plan.tier}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-foreground">
                  £{plan.price}
                </span>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          All prices include deployment and setup. Hosting from £15/month.
        </p>
      </div>
    </section>
  )
}