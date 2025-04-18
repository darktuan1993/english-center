import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

interface RelatedPostsProps {
  currentSlug: string
  tags: string[]
}

// This would normally fetch from your MDX content
// For demo purposes, we're using static data
const demoRelatedPosts = [
  {
    slug: "5-phuong-phap-hoc-tieng-anh-hieu-qua-tai-nha",
    title: "5 phương pháp học tiếng Anh hiệu quả tại nhà",
    date: "2025-04-01",
    image: "/placeholder.svg?height=400&width=600&text=English Learning",
    tags: ["phương pháp học", "tự học", "tiếng Anh"],
  },
  {
    slug: "lam-the-nao-de-cai-thien-ky-nang-nghe-tieng-anh",
    title: "Làm thế nào để cải thiện kỹ năng nghe tiếng Anh",
    date: "2025-03-25",
    image: "/placeholder.svg?height=400&width=600&text=Listening Skills",
    tags: ["kỹ năng nghe", "phương pháp học", "tiếng Anh"],
  },
  {
    slug: "tu-vung-tieng-anh-thong-dung-trong-cong-viec",
    title: "Từ vựng tiếng Anh thông dụng trong công việc",
    date: "2025-03-18",
    image: "/placeholder.svg?height=400&width=600&text=Business English",
    tags: ["từ vựng", "tiếng Anh thương mại", "công việc"],
  },
]

export default function RelatedPosts({ currentSlug, tags }: RelatedPostsProps) {
  // Find posts that share at least one tag with the current post
  const relatedPosts = demoRelatedPosts
    .filter((post) => {
      if (post.slug === currentSlug) return false
      return post.tags.some((tag) => tags.includes(tag))
    })
    .slice(0, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {relatedPosts.map((post) => (
        <div key={post.slug} className="flex gap-3">
          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <div className="space-y-1">
            <h4 className="font-medium line-clamp-2">
              <Link href={`/bai-viet/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h4>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <time dateTime={post.date}>{format(new Date(post.date), "dd/MM/yyyy", { locale: vi })}</time>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
