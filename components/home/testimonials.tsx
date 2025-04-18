import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Học viên khóa IELTS",
    content:
      "Tôi đã tham gia khóa học IELTS tại trung tâm và đạt được 7.5 band điểm sau 3 tháng học tập. Giảng viên rất tận tâm và phương pháp giảng dạy hiệu quả.",
    avatar: "/placeholder.svg?height=100&width=100&text=NVA",
    rating: 5,
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Phụ huynh học viên",
    content:
      "Con tôi học tiếng Anh tại trung tâm đã 2 năm. Tôi rất hài lòng với sự tiến bộ của con. Giáo viên nhiệt tình, lớp học vui vẻ và con tôi rất thích đến trung tâm.",
    avatar: "/placeholder.svg?height=100&width=100&text=TTB",
    rating: 5,
  },
  {
    id: 3,
    name: "Lê Văn C",
    role: "Học viên khóa giao tiếp",
    content:
      "Sau 6 tháng học tại trung tâm, tôi đã tự tin giao tiếp tiếng Anh với đồng nghiệp nước ngoài. Phương pháp học thực tế và môi trường học tập thân thiện.",
    avatar: "/placeholder.svg?height=100&width=100&text=LVC",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="container py-12 md:py-24 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Học viên nói gì về chúng tôi</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Hàng nghìn học viên đã thành công trong việc học tiếng Anh tại trung tâm của chúng tôi
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <CardContent className="p-6 space-y-4 flex flex-col h-full">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                  />
                ))}
              </div>
              <p className="flex-1">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
