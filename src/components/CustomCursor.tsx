'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
      const target = e.target as HTMLElement
      const isInteractive = target.closest('.project-row, a, button')
      setActive(!!isInteractive)
    }

    function handleLeave() {
      setVisible(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <svg
      className={`custom-cursor ${active ? 'is-active' : ''} ${visible ? 'is-visible' : ''}`}
      style={{ left: pos.x, top: pos.y }}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2 2 L2 16 L6 12.5 L8.5 18 L10.5 17 L8 11.5 L14 11.5 Z"
        fill="black"
        stroke="white"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}