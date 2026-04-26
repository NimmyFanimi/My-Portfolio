'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  name: string
  type: string
  location: string
  image: string
  url: string
}

export function ProjectCard({ name, type, location, image, url }: ProjectCardProps) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
      {/* Project image */}
      <Image
        src={image}
        alt={`${name} website preview`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-foreground">{name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {type} &middot; {location}
        </p>
        <Button 
          size="sm" 
          className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">View Site</a>
        </Button>
      </div>
    </div>
  )
}
