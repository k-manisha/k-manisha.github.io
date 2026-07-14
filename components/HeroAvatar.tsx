'use client'

import Image from 'next/image'
import { useState } from 'react'

const GITHUB_AVATAR = 'https://avatars.githubusercontent.com/u/k-manisha'
const GITHUB_API_AVATAR = 'https://avatars.githubusercontent.com/k-manisha'

export default function HeroAvatar() {
  const [src, setSrc] = useState(GITHUB_API_AVATAR)

  return (
    <div className="hidden md:block flex-shrink-0">
      <Image
        src={src}
        alt="Manisha Kashyap"
        width={180}
        height={180}
        className="rounded-xl"
        onError={() => setSrc(GITHUB_AVATAR)}
        priority
      />
    </div>
  )
}
