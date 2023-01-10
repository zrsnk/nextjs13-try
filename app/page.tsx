import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts')
  return res.json()
}

const IMG_WIDTH = 236
const IMG_HEIGHT = 270

type Post = {
  userName: string
  postId: string
  title: string
  url: string
  thumbnailUrl: string
}

export default async function RootPage() {
  const posts = await getData()
  return (
    <div className="mt-20">
      <div className="grid grid-cols-3 gap-3">
        {posts.map((post: Post) => (
          <Link href={`/post/${post.postId.toString()}`}>
            <Image
              src={post.thumbnailUrl}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt=""
              className="rounded-2xl w-full"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
