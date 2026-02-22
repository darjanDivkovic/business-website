import { BlogPostPage } from '@/app/pages/Blog/BlogPostPage'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  return <BlogPostPage slug={slug} />
}