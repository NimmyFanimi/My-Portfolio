'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.get('name'),
        business: data.get('business'),
        message: data.get('message'),
      }),
    })
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="text-foreground text-lg">Thanks! I'll get back to you within one working day.</p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
        <Input id="name" name="name" type="text" required placeholder="Your name" className="bg-secondary border-border focus:border-primary focus:ring-primary" />
      </div>
      <div className="space-y-2">
        <label htmlFor="business" className="text-sm font-medium text-foreground">Business name</label>
        <Input id="business" name="business" type="text" required placeholder="Your business name" className="bg-secondary border-border focus:border-primary focus:ring-primary" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">What do you need?</label>
        <Textarea id="message" name="message" required placeholder="Tell me about your project..." rows={6} className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none" />
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}