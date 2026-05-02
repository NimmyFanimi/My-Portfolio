import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '7rbxfwnm',
  dataset: 'production',
  apiVersion: '2026-05-01',
  useCdn: false,
  fetch: {
    cache: 'no-store',
  },
})