import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"
import { getCourseBySlug, getAllCourses } from "@/lib/mdx"
import CourseContent from "@/components/courses/course-content"
import CourseRegistrationForm from "@/components/courses/course-registration-form"
import RelatedCourses from "@/components/courses/related-courses"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const course = await getCourseBySlug(slug)

  if (!course) {
    return {
      metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
      title: "Khóa học không tồn tại",
      description: "Không tìm thấy khóa học này",
    }
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.image],
    },
  }
}

export async function generateStaticParams() {
  const courses = await getAllCourses()

  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const course = await getCourseBySlug(slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge>{course.level}</Badge>
              <Badge variant="outline">{course.category}</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
            <p className="text-xl text-muted-foreground">{course.description}</p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={course.image || "/placeholder.svg?height=600&width=1200"}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>Đối tượng: {course.audience}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span>{course.schedule}</span>
            </div>
          </div>

          <Tabs defaultValue="content">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="content">Nội dung khóa học</TabsTrigger>
              <TabsTrigger value="objectives">Mục tiêu</TabsTrigger>
              <TabsTrigger value="benefits">Lợi ích</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="py-4">
              <CourseContent content={course.content} />
            </TabsContent>
            <TabsContent value="objectives" className="py-4">
              <h3 className="text-xl font-bold mb-4">Mục tiêu khóa học</h3>
              <ul className="space-y-2">
                {course.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="benefits" className="py-4">
              <h3 className="text-xl font-bold mb-4">Lợi ích khi tham gia</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          <div className="bg-muted rounded-lg p-6 space-y-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Học phí</div>
              <div className="text-3xl font-bold">{course.price}</div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Bao gồm:</h3>
              <ul className="space-y-2">
                {course.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full">Đăng ký ngay</Button>
          </div>

          <CourseRegistrationForm courseTitle={course.title} />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Khóa học liên quan</h2>
        <RelatedCourses currentSlug={slug} category={course.category} />
      </div>
    </div>
  )
}
