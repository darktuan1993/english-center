import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: "Liên hệ với trung tâm tiếng Anh của chúng tôi để được tư vấn và hỗ trợ.",
}

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Liên Hệ</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Liên hệ với chúng tôi để được tư vấn và hỗ trợ
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Phone className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-bold">Điện thoại</h3>
                <p className="text-muted-foreground">0123 456 789</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Mail className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-bold">Email</h3>
                <p className="text-muted-foreground">info@englishcenter.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-bold">Địa chỉ</h3>
                <p className="text-muted-foreground">123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-bold">Giờ làm việc</h3>
                <p className="text-muted-foreground">Thứ 2 - Thứ 7: 8:00 - 21:00</p>
                <p className="text-muted-foreground">Chủ nhật: 9:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197667!2d106.69173781471815!3d10.780260992318766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5c768d2245!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIFRQLiBIQ00!5e0!3m2!1svi!2s!4v1650000000000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="bg-muted p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
