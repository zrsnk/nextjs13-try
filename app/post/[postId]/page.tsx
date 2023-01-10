import Image from 'next/image'
import Link from 'next/link'
import { LeftArrow } from '../../../icons'

// paramsからidを取得し，idを引数に渡してそのidのデータを返すAPIを叩く

export default function PostPage() {
  return (
    <div className="flex gap-3">
      <Link href="/">
        <LeftArrow />
      </Link>
      {/* <Image src={} width={} height={} alt=""/> */}
    </div>
  )
}
