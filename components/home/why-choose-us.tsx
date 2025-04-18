import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Clock } from "lucide-react"

const features = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Giảng viên chất lượng cao",
    description: "Đội ngũ giảng viên có trình độ chuyên môn cao, nhiều năm kinh nghiệm giảng dạy",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Lớp học quy mô nhỏ",
    description: "Tối đa 15 học viên/lớp giúp giảng viên quan tâm đến từng học viên",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Giáo trình chuẩn quốc tế",
    description: "Giáo trình được biên soạn dựa trên các tài liệu chuẩn quốc tế, cập nhật thường xuyên",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Thời gian linh hoạt",
    description: "Nhiều ca học trong ngày, cả buổi tối và cuối tuần để phù hợp với lịch trình của học viên",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-muted py-12 md:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Tại sao chọn chúng tôi?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Trung tâm tiếng Anh của chúng tôi cung cấp môi trường học tập chất lượng cao với nhiều ưu điểm vượt trội
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1200&width=1200"
              alt="Học viên tại trung tâm"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-2">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
