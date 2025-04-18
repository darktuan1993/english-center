import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Custom components for MDX
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4" id={props.id} {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3" id={props.id} {...props} />,
  h4: (props: any) => <h4 className="text-lg font-bold mt-6 mb-2" id={props.id} {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  a: (props: any) => <Link className="text-primary underline underline-offset-2" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary pl-4 italic my-6" {...props} />,
  img: (props: any) => (
    <div className="relative h-[400px] my-6 rounded-lg overflow-hidden">
      <Image src={props.src || "/placeholder.svg"} alt={props.alt || "Image"} fill className="object-cover" />
    </div>
  ),
  Button: (props: any) => <Button {...props} />,
}

interface PostContentProps {
  content: string // This should be the raw MDX content as a string
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  )
}
