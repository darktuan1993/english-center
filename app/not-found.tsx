import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-bold mt-6">Trang không tồn tại</h2>
      <p className="text-xl text-muted-foreground mt-4 max-w-md">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Quay lại trang chủ</Link>
      </Button>
    </div>
  )
}
