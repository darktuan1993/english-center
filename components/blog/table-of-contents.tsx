"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { List } from "lucide-react"

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /<h([1-6])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h\1>/g
    const matches = Array.from(content.matchAll(headingRegex))
    const extractedHeadings = matches.map((match) => ({
      id: match[2],
      text: match[3],
      level: parseInt(match[1]),
    }))
    setHeadings(extractedHeadings)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -80% 0px" },
    )

    extractedHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      extractedHeadings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [content])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className="sticky top-4 space-y-4">
      <div className="flex items-center gap-2">
        <List className="h-4 w-4" />
        <h2 className="font-semibold">Mục lục</h2>
      </div>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "block text-sm text-muted-foreground hover:text-foreground transition-colors",
              activeId === heading.id && "text-foreground font-medium",
              heading.level === 3 && "ml-4",
              heading.level === 4 && "ml-8",
            )}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  )
}
