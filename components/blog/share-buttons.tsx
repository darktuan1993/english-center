"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface ShareButtonsProps {
  title: string
  slug: string
}

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const baseUrl = typeof window !== "undefined" ? window.location.origin : ""
  const url = `${baseUrl}/bai-viet/${slug}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    toast({
      title: "Đã sao chép liên kết",
      description: "Liên kết đã được sao chép vào clipboard",
    })
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="font-medium">Chia sẻ bài viết</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")}
        >
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Chia sẻ lên Facebook</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank")}
        >
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Chia sẻ lên Twitter</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank")}
        >
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Chia sẻ lên LinkedIn</span>
        </Button>
        <Button variant="outline" size="icon" onClick={handleCopyLink}>
          <Link2 className="h-4 w-4" />
          <span className="sr-only">Sao chép liên kết</span>
        </Button>
      </div>
    </div>
  )
}
