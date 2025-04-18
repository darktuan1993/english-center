import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

const latestPosts = [
  {
    id: 1,
    title: "5 phương pháp học tiếng Anh hiệu quả tại nhà",
    excerpt: "Khám phá các phương pháp học tiếng Anh tại nhà hiệu quả, tiết kiệm thời gian và chi phí.",
    image: "/placeholder.svg?height=400&width=600&text=English Learning",
    date: "2025-04-01",
    slug: "5-phuong-phap-hoc-tieng-anh-hieu-qua-tai-nha",
  },
  {
    id: 2,
    title: "Làm thế nào để cải thiện kỹ năng nghe tiếng Anh",
    excerpt: "Những bí quyết giúp bạn nâng cao khả năng nghe hiểu tiếng Anh một cách nhanh chóng.",
    image: "/placeholder.svg?height=400&width=600&text=Listening Skills",
    date: "2025-03-25",
    slug: "lam-the-nao-de-cai-thien-ky-nang-nghe-tieng-anh",
  },
  {
    id: 3,
    title: "Từ vựng tiếng Anh thông dụng trong công việc",
    excerpt: "Tổng hợp các từ vựng và cụm từ tiếng Anh thường được sử dụng trong môi trường làm việc.",
    image: "/placeholder.svg?height=400&width=600&text=Business English",
    date: "2025-03-18",
    slug: "tu-vung-tieng-anh-thong-dung-trong-cong-viec",
  },
]

export default function LatestPosts() {
  return (
    <section className="container py-12 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Bài viết mới nhất</h2>
          <p className="text-muted-foreground">Cập nhật kiến thức và phương pháp học tiếng Anh hiệu quả</p>
        </div>
        <Button asChild variant="ghost" className="gap-1">
          <Link href="/bai-viet">
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{format(new Date(post.date), "dd MMMM, yyyy", { locale: vi })}</time>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full">
                <Link href={`/bai-viet/${post.slug}`}>Đọc tiếp</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
