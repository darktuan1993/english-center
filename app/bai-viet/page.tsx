import type { Metadata } from "next"
import { getAllPosts } from "@/lib/mdx"
import PostList from "@/components/blog/post-list"
import PostFilter from "@/components/blog/post-filter"

export const metadata: Metadata = {
  title: "Bài Viết",
  description: "Chia sẻ kiến thức, kinh nghiệm và phương pháp học tiếng Anh hiệu quả.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Bài Viết</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Chia sẻ kiến thức, kinh nghiệm và phương pháp học tiếng Anh hiệu quả
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <PostFilter />
        </div>
        <div className="md:col-span-3">
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  )
}
