import { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact | Nimmy',
  description: 'Get in touch to discuss your website project.',
}

export default function ContactPage() {
  return (
    <div className="noise-bg">
      <section className="grid-bg">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Got a project in mind?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Fill in the form and I&apos;ll get back to you within one working day. If you&apos;d rather just send an email directly, I&apos;m at{' '}
            <a 
              href="mailto:nimmy.webdesign@gmail.com" 
              className="text-primary hover:underline"
            >
              nimmy.webdesign@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-3xl px-6 py-10 md:py-12">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
