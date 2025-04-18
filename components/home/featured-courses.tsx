import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const featuredCourses = [
  {
    id: 1,
    title: "Tiếng Anh giao tiếp",
    description: "Khóa học giúp bạn tự tin giao tiếp tiếng Anh trong mọi tình huống",
    image: "/placeholder.svg?height=400&width=600&text=English Communication",
    level: "Cơ bản - Nâng cao",
    slug: "tieng-anh-giao-tiep",
  },
  {
    id: 2,
    title: "Tiếng Anh thiếu nhi",
    description: "Phương pháp học vui nhộn, hiệu quả dành cho trẻ em từ 4-15 tuổi",
    image: "/placeholder.svg?height=400&width=600&text=Kids English",
    level: "Mọi trình độ",
    slug: "tieng-anh-thieu-nhi",
  },
  {
    id: 3,
    title: "Luyện thi IELTS",
    description: "Chiến lược làm bài hiệu quả, nâng band điểm nhanh chóng",
    image: "/placeholder.svg?height=400&width=600&text=IELTS Preparation",
    level: "Trung cấp - Nâng cao",
    slug: "luyen-thi-ielts",
  },
]

export default function FeaturedCourses() {
  return (
    <section className="container py-12 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Khóa học nổi bật</h2>
          <p className="text-muted-foreground">Khám phá các khóa học tiếng Anh phổ biến nhất của chúng tôi</p>
        </div>
        <Button asChild variant="ghost" className="gap-1">
          <Link href="/khoa-hoc">
            Xem tất cả khóa học
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <Badge className="absolute top-2 right-2">{course.level}</Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-muted-foreground">{course.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={`/khoa-hoc/${course.slug}`}>Xem chi tiết</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
