import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UserList({ data, setSearching }) {
  console.log(data)
  return (
    <div class="grid grid-cols-1 divide-y absolute w-full h-min scroll-m-2 snap-y">
        {data && data?.map((item, i) =>(
          <a href={`/repository/${item.login}`} onClick={() => setSearching("")} key={i}>
            <div  className="bg-white flex p-4 scroll-ml-6 snap-start" >
                <Image
                  src={item.avatar_url}
                  width={100}
                  height={100}
                  className={`w-14 h-14 rounded-full mr-5`}
                />
                <span className='pt-3'>{item.login}</span>
            </div>
          </a>
        ))}
    </div>
  )
}

export default UserList
