import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Nâng cao kỹ năng tiếng Anh của bạn cùng chúng tôi
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Trung tâm tiếng Anh hàng đầu với phương pháp giảng dạy hiện đại và đội ngũ giảng viên chất lượng cao
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/khoa-hoc">Khám phá khóa học</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/lien-he">Đăng ký học thử</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=800&width=800"
            width={600}
            height={600}
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}
