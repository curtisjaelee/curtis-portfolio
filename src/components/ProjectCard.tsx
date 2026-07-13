'use client'

import { useState } from 'react'
import { Project } from '@/data/projects'

const tagColorMap = {
  blue: { bg: '#e6f1fb', text: '#378add' },
  green: { bg: '#eaf3de', text: '#639922' },
  purple: { bg: '#eeedfe', text: '#534ab7' },
  amber: { bg: '#faeeda', text: '#ba7517' },
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<Project | null>(null)
  const [pinned, setPinned] = useState<Project | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  function handleMouseMove(e: React.MouseEvent) {
    if (!pinned) {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
  }

  function handleListLeave() {
    if (!pinned) {
      setHovered(null)
    }
  }

  function handleClick(project: Project, e: React.MouseEvent) {
    setPinned(project)
    setHovered(null)
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const active = pinned || hovered

  return (
    <div
      className="project-list"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleListLeave}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project-row ${pinned?.id === project.id ? 'pinned' : ''}`}
          onMouseEnter={() => !pinned && setHovered(project)}
          onClick={(e) => handleClick(project, e)}
        >
          <span>{project.name}</span>
          <span className="project-year">{project.year}</span>
        </div>
      ))}

      {active && (
        <>
          {pinned && (
            <div className="popup-overlay" onClick={() => setPinned(null)} />
          )}
          <div
            className={`project-popup ${pinned ? 'is-pinned' : ''}`}
            style={{ left: mousePos.x + 24, top: mousePos.y - 40 }}
          >
            <div className="popup-header">
              <strong>{active.name}</strong>
            </div>
            <p>{active.description}</p>
            <div className="popup-tags">
              {active.tags.map((tag) => {
                const colors = tagColorMap[active.tagColor]
                return (
                  <span key={tag} className="tag" style={{ background: colors.bg, color: colors.text }}>
                    {tag}
                  </span>
                )
              })}
            </div>
            <div className="popup-links">
              {active.links.repo && <a href={active.links.repo} target="_blank" rel="noopener noreferrer">Repo →</a>}
              {active.links.demo && <a href={active.links.demo} target="_blank" rel="noopener noreferrer">Demo →</a>}
            </div>
          </div>
        </>
      )}
    </div>
  )
}