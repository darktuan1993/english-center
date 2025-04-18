import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

interface Post {
  slug: string
  title: string
  description: string
  image: string
  date: string
  readingTime: string
  tags: string[]
}

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="grid gap-6">
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">Không tìm thấy bài viết nào</h3>
          <p className="text-muted-foreground mt-2">Vui lòng thử lại với bộ lọc khác</p>
        </div>
      ) : (
        posts.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            <div className="grid md:grid-cols-[300px_1fr] gap-6">
              <div className="relative h-48 md:h-full">
                <Image
                  src={post.image || "/placeholder.svg?height=600&width=600"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <CardContent className="p-0 flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>{format(new Date(post.date), "dd MMMM, yyyy", { locale: vi })}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} phút đọc</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button asChild variant="outline">
                    <Link href={`/bai-viet/${post.slug}`}>Đọc tiếp</Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  )
}
