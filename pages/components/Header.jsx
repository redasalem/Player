import React from 'react'
import { HiMiniPencilSquare } from "react-icons/hi2";
import { PiSignIn } from "react-icons/pi";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';



const Header = () => {
  const router = useRouter()
   const { data: session } = useSession()
  return (
    <div className='flex justify-between'>
      <img width={100} src="/images/logo.png" alt="logo" />

      <div className='flex items-center gap-3 px-5'>
        {!session?<button onClick={()=>signIn()} className='bg-black p-3 rounded-full text-white'>
         <span className='sm:block hidden'>Sign In</span>
           < PiSignIn className="sm:hidden block"/>
           </button>:<button onClick={()=>signOut()} className='bg-black p-3 rounded-full text-white'>
         <span className='sm:block hidden'>Sign Out</span>
           < PiSignIn className="sm:hidden block"/>
           </button>}
        <button
        onClick={()=>router.push('/create-post')}
         className='bg-amber-600 p-3 rounded-full text-black'>
         <span className='sm:block hidden'>Create Post</span> <HiMiniPencilSquare className="sm:hidden block"/>
          </button>
          <img onClick={()=>router.push('/profile')} className='rounded-full cursor-pointer' width={50} src={session?.user.image||'/images/profile.png'} alt="profile" />
      </div>

      


    </div>
  )
}

export default Header