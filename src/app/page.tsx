'use client'

import { projects } from '@/data/projects'
import { ProjectList } from '@/components/ProjectCard'

export default function Home() {
  return (
    <main className="hero">
      <ProjectList projects={projects} />

      <div className="hero-content">
        <h1>
          Curtis Lee,<br />
          I build cloud systems people can <span className="accent">actually rely on</span> 
        </h1>
        <div className="hero-links">
            <a href="/curtis-lee-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="mailto:curtisjaelee@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/curtisjlee/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/curtisjaelee" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </main>
  )
}