import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RelatedCoursesProps {
  currentSlug: string
  category: string
}

// This would normally fetch from your MDX content
// For demo purposes, we're using static data
const demoRelatedCourses = [
  {
    slug: "tieng-anh-giao-tiep",
    title: "Tiếng Anh giao tiếp",
    description: "Khóa học giúp bạn tự tin giao tiếp tiếng Anh trong mọi tình huống",
    image: "/placeholder.svg?height=400&width=600&text=English Communication",
    level: "Cơ bản - Nâng cao",
    category: "general",
  },
  {
    slug: "tieng-anh-thieu-nhi",
    title: "Tiếng Anh thiếu nhi",
    description: "Phương pháp học vui nhộn, hiệu quả dành cho trẻ em từ 4-15 tuổi",
    image: "/placeholder.svg?height=400&width=600&text=Kids English",
    level: "Mọi trình độ",
    category: "kids",
  },
  {
    slug: "luyen-thi-ielts",
    title: "Luyện thi IELTS",
    description: "Chiến lược làm bài hiệu quả, nâng band điểm nhanh chóng",
    image: "/placeholder.svg?height=400&width=600&text=IELTS Preparation",
    level: "Trung cấp - Nâng cao",
    category: "ielts",
  },
]

export default function RelatedCourses({ currentSlug, category }: RelatedCoursesProps) {
  // Filter out current course and get courses in the same category
  const relatedCourses = demoRelatedCourses
    .filter((course) => course.slug !== currentSlug && course.category === category)
    .slice(0, 2)

  if (relatedCourses.length === 0) {
    return null
  }

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {relatedCourses.map((course) => (
        <Card key={course.slug} className="overflow-hidden">
          <div className="grid sm:grid-cols-[120px_1fr] gap-4">
            <div className="relative h-24 sm:h-full">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <Badge className="mb-2">{course.level}</Badge>
              <h3 className="font-bold mb-1">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{course.description}</p>
              <Button asChild variant="outline" size="sm">
                <Link href={`/khoa-hoc/${course.slug}`}>Xem chi tiết</Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
