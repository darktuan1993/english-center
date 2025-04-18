"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const categories = [
  { id: "learning-methods", label: "Phương pháp học" },
  { id: "pronunciation", label: "Phát âm" },
  { id: "vocabulary", label: "Từ vựng" },
  { id: "grammar", label: "Ngữ pháp" },
  { id: "communication", label: "Giao tiếp" },
  { id: "exam-preparation", label: "Luyện thi" },
]

export default function PostFilter() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Tìm kiếm bài viết..." className="pl-8" />
      </div>

      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Lọc bài viết
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Lọc bài viết</SheetTitle>
            </SheetHeader>
            <div className="py-4 space-y-6">
              <FilterContent />
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="flex-1">Áp dụng</Button>
              <Button variant="outline" className="flex items-center gap-1">
                <X className="h-4 w-4" />
                Xóa bộ lọc
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden lg:block space-y-6">
        <FilterContent />
        <div className="flex gap-2">
          <Button className="flex-1">Áp dụng</Button>
          <Button variant="outline" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function FilterContent() {
  return (
    <>
      <div className="space-y-4">
        <h3 className="font-medium">Chủ đề</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
