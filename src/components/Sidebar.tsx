import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen p-2 bg-gray-300 flex flex-col gap-3 w-[200px]'>
        <h1 className='font-bold uppercase'>Admin Dashboard</h1>
        <div className='flex flex-col gap-2'>
            <Link href={"/dashboard"}>Main</Link>
            <Link href={"/dashboard/favourites"}>Favourites</Link>
        </div>
    </div>
  )
}

export default Sidebar