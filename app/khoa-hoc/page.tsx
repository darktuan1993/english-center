import type { Metadata } from "next"
import CourseList from "@/components/courses/course-list"
import CourseFilter from "@/components/courses/course-filter"
import { getAllCourses } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Khóa Học",
  description: "Khám phá các khóa học tiếng Anh đa dạng cho mọi lứa tuổi và trình độ tại trung tâm của chúng tôi.",
}

export default async function CoursesPage() {
  const courses = await getAllCourses()

  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Khóa Học</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Khám phá các khóa học tiếng Anh đa dạng cho mọi lứa tuổi và trình độ
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <CourseFilter />
        </div>
        <div className="md:col-span-3">
          <CourseList courses={courses} />
        </div>
      </div>
    </div>
  )
}
