import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock } from "lucide-react"

interface Course {
  slug: string
  title: string
  description: string
  image: string
  level: string
  category: string
  audience: string
  duration: string
}

interface CourseListProps {
  courses: Course[]
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid gap-6">
      {courses.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">Không tìm thấy khóa học nào</h3>
          <p className="text-muted-foreground mt-2">Vui lòng thử lại với bộ lọc khác</p>
        </div>
      ) : (
        courses.map((course) => (
          <Card key={course.slug} className="overflow-hidden">
            <div className="grid md:grid-cols-[300px_1fr] gap-6">
              <div className="relative h-48 md:h-full">
                <Image
                  src={course.image || "/placeholder.svg?height=600&width=600"}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-2 right-2">{course.level}</Badge>
              </div>
              <div className="p-6 flex flex-col">
                <CardContent className="p-0 flex-1">
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline">{course.category}</Badge>
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <p className="text-muted-foreground">{course.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span>{course.audience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-4">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href={`/khoa-hoc/${course.slug}`}>Xem chi tiết</Link>
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
