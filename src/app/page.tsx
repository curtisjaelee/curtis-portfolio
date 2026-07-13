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
          <span className="accent">cloud engineer</span> building on AWS
        </h1>
        <div className="hero-links">
            <a href="/curtis-lee-resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="mailto:curtisjaelee@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/curtis-lee-6a1904220/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/curtisjaelee" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </main>
  )
}