import React from 'react'
import Link from "next/link";
import Image from "next/image";
function ReturnLink({caption}) {
  return (
    <div className='flex flex-row items-center'>
        <Link href="">
              <Image
                  src="/img/submelk/right.png"
                  width="30"
                  height="30"

              />
        </Link>
          <span className="text-blue900 text-base font-bold">{caption}</span>
    </div>
  )
}

export default ReturnLink