import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

interface CourseContentProps {
  content: {
    title: string
    lessons: {
      title: string
      duration: string
    }[]
  }[]
}

export default function CourseContent({ content }: CourseContentProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Nội dung khóa học</h3>
      <Accordion type="single" collapsible className="w-full">
        {content.map((module, index) => (
          <AccordionItem key={index} value={`module-${index}`}>
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-medium">Module {index + 1}:</span>
                <span>{module.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-6 pt-2">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span>{lesson.title}</span>
                        <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
