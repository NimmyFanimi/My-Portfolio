import { type SchemaTypeDefinition } from 'sanity'
import { projectSchema } from './project'
import { pricingSchema } from './pricing'
import { aboutSchema } from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, pricingSchema, aboutSchema],
}