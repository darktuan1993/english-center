"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

interface CourseRegistrationFormProps {
  courseTitle: string
}

export default function CourseRegistrationForm({ courseTitle }: CourseRegistrationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-muted rounded-lg p-6 text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold">Đăng ký thành công!</h3>
        <p className="text-muted-foreground">
          Cảm ơn bạn đã đăng ký tư vấn khóa học. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-muted rounded-lg p-6 space-y-6">
      <h3 className="text-xl font-bold">Đăng ký tư vấn</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="course" value={courseTitle} />

        <div className="space-y-2">
          <Label htmlFor="name">Họ và tên</Label>
          <Input id="name" name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Số điện thoại</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Lời nhắn (không bắt buộc)</Label>
          <Textarea id="message" name="message" rows={3} />
        </div>

        <Button type="submit" className="w-full">
          Gửi đăng ký
        </Button>
      </form>
    </div>
  )
}
