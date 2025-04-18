import type { Metadata } from "next"
import Hero from "@/components/home/hero"
import FeaturedCourses from "@/components/home/featured-courses"
import WhyChooseUs from "@/components/home/why-choose-us"
import Testimonials from "@/components/home/testimonials"
import LatestPosts from "@/components/home/latest-posts"
import CallToAction from "@/components/home/call-to-action"

export const metadata: Metadata = {
  title: "Home | Learn English Effectively",
  description: "Welcome to our English language center. We offer various courses for all ages and levels.",
}

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />
      <FeaturedCourses />
      <WhyChooseUs />
      <Testimonials />
      <LatestPosts />
      <CallToAction />
    </div>
  )
}
