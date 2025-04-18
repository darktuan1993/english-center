import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { vi } from "date-fns/locale"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import TableOfContents from "@/components/blog/table-of-contents"
import ShareButtons from "@/components/blog/share-buttons"
import RelatedPosts from "@/components/blog/related-posts"
import PostContent from "@/components/blog/post-content"
import Breadcrumb from "@/components/breadcrumb"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
      title: "Bài viết không tồn tại",
      description: "Không tìm thấy bài viết này",
    }
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["English Center"],
      tags: post.tags,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const formattedDate = format(new Date(post.date), "dd MMMM, yyyy", { locale: vi })

  return (
    <div className="container py-12">
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Bài viết", href: "/bai-viet" },
          { label: post.title, href: `/bai-viet/${post.slug}`, active: true },
        ]}
      />

      <div className="grid lg:grid-cols-4 gap-8 mt-8">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} phút đọc</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg?height=600&width=1200"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <PostContent content={post.content} />
        </div>

        <div className="space-y-8">
          <TableOfContents content={post.content} />
          <ShareButtons title={post.title} url={`/bai-viet/${post.slug}`} />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Bài viết liên quan</h2>
        <RelatedPosts currentSlug={post.slug} tags={post.tags} />
      </div>
    </div>
  )
}
