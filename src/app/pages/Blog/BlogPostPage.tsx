interface Props {
  slug: string
}

export function BlogPostPage({ slug }: Props) {
  return (
    <main>
      <h1>{slug}</h1>
    </main>
  )
}