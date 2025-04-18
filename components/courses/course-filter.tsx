"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const levels = [
  { id: "beginner", label: "Cơ bản" },
  { id: "intermediate", label: "Trung cấp" },
  { id: "advanced", label: "Nâng cao" },
]

const categories = [
  { id: "general", label: "Tiếng Anh tổng quát" },
  { id: "business", label: "Tiếng Anh thương mại" },
  { id: "kids", label: "Tiếng Anh thiếu nhi" },
  { id: "ielts", label: "Luyện thi IELTS" },
  { id: "toeic", label: "Luyện thi TOEIC" },
]

const audiences = [
  { id: "children", label: "Trẻ em (4-11 tuổi)" },
  { id: "teenagers", label: "Thanh thiếu niên (12-17 tuổi)" },
  { id: "adults", label: "Người lớn (18+ tuổi)" },
  { id: "professionals", label: "Người đi làm" },
]

export default function CourseFilter() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Tìm kiếm khóa học..." className="pl-8" />
      </div>

      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Lọc khóa học
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Lọc khóa học</SheetTitle>
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
        <h3 className="font-medium">Trình độ</h3>
        <div className="space-y-2">
          {levels.map((level) => (
            <div key={level.id} className="flex items-center space-x-2">
              <Checkbox id={`level-${level.id}`} />
              <Label htmlFor={`level-${level.id}`}>{level.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Loại khóa học</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Đối tượng</h3>
        <div className="space-y-2">
          {audiences.map((audience) => (
            <div key={audience.id} className="flex items-center space-x-2">
              <Checkbox id={`audience-${audience.id}`} />
              <Label htmlFor={`audience-${audience.id}`}>{audience.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
