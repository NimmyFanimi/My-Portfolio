import { defineField, defineType } from 'sanity'

export const pricingSchema = defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({
      name: 'tier',
      title: 'Tier Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price (£)',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'highlighted',
      title: 'Highlighted (Most Popular)',
      type: 'boolean',
    }),
  ],
})