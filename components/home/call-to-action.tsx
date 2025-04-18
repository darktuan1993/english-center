import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-24">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Sẵn sàng nâng cao kỹ năng tiếng Anh?
        </h2>
        <p className="mx-auto max-w-3xl text-lg md:text-xl">
          Đăng ký học thử miễn phí ngay hôm nay và trải nghiệm phương pháp học tiếng Anh hiệu quả tại trung tâm của
          chúng tôi.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/lien-he">Đăng ký học thử</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/khoa-hoc">Xem khóa học</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
