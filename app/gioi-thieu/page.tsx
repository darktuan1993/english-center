import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Giới Thiệu",
  description: "Tìm hiểu về trung tâm tiếng Anh của chúng tôi, lịch sử hình thành, sứ mệnh và đội ngũ giảng viên.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Về Chúng Tôi</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Trung tâm tiếng Anh hàng đầu với phương pháp giảng dạy hiện đại và đội ngũ giảng viên chất lượng cao
        </p>
      </div>

      <Tabs defaultValue="history" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="history">Lịch sử</TabsTrigger>
          <TabsTrigger value="mission">Sứ mệnh & Tầm nhìn</TabsTrigger>
          <TabsTrigger value="teachers">Đội ngũ giảng viên</TabsTrigger>
          <TabsTrigger value="facilities">Cơ sở vật chất</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="space-y-6 py-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Lịch sử hình thành</h2>
              <div className="space-y-4">
                <p>
                  Trung tâm tiếng Anh của chúng tôi được thành lập vào năm 2010 với sứ mệnh mang đến phương pháp học
                  tiếng Anh hiệu quả và thực tiễn cho người Việt Nam.
                </p>
                <p>
                  Trải qua hơn 10 năm phát triển, chúng tôi đã đào tạo hơn 50,000 học viên và không ngừng cải tiến
                  phương pháp giảng dạy để đáp ứng nhu cầu ngày càng cao của xã hội.
                </p>
                <p>Hiện nay, trung tâm đã có 5 cơ sở trên toàn quốc với đội ngũ hơn 100 giảng viên chuyên nghiệp.</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Lịch sử hình thành"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="mission" className="space-y-8 py-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Sứ mệnh</h3>
                <p>
                  Chúng tôi cam kết mang đến phương pháp học tiếng Anh hiệu quả, thực tiễn và phù hợp với người Việt
                  Nam, giúp học viên tự tin sử dụng tiếng Anh trong môi trường học tập, làm việc và giao tiếp quốc tế.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Tầm nhìn</h3>
                <p>
                  Trở thành trung tâm đào tạo tiếng Anh hàng đầu Việt Nam, được công nhận về chất lượng giảng dạy và
                  phương pháp học hiệu quả, góp phần nâng cao năng lực ngoại ngữ cho người Việt.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Giá trị cốt lõi</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="space-y-2">
                  <div className="font-medium">Chất lượng</div>
                  <p className="text-sm text-muted-foreground">
                    Cam kết chất lượng giảng dạy và kết quả đầu ra cho học viên
                  </p>
                </li>
                <li className="space-y-2">
                  <div className="font-medium">Đổi mới</div>
                  <p className="text-sm text-muted-foreground">Liên tục cập nhật phương pháp giảng dạy hiện đại</p>
                </li>
                <li className="space-y-2">
                  <div className="font-medium">Tận tâm</div>
                  <p className="text-sm text-muted-foreground">Đặt lợi ích và sự tiến bộ của học viên lên hàng đầu</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="teachers" className="py-6">
          <h2 className="text-2xl font-bold mb-6">Đội ngũ giảng viên</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((teacher) => (
              <Card key={teacher}>
                <div className="relative h-[200px]">
                  <Image
                    src={`/placeholder.svg?height=400&width=300&text=Teacher ${teacher}`}
                    alt={`Giảng viên ${teacher}`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold">Giảng viên {teacher}</h3>
                  <p className="text-sm text-muted-foreground">Chứng chỉ IELTS 8.5, 5 năm kinh nghiệm giảng dạy</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="facilities" className="py-6">
          <h2 className="text-2xl font-bold mb-6">Cơ sở vật chất</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Modern Classrooms"
                  alt="Phòng học hiện đại"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Phòng học hiện đại</h3>
              <p>
                Phòng học được trang bị đầy đủ thiết bị hiện đại, máy chiếu, âm thanh chất lượng cao và điều hòa nhiệt
                độ.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=800&text=Library"
                  alt="Thư viện"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Thư viện</h3>
              <p>
                Thư viện với hàng nghìn đầu sách tiếng Anh, tài liệu học tập và không gian yên tĩnh để học viên nghiên
                cứu.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
