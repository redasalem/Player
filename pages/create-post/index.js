import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Form from '../form-post/Form';

const CreatePost = () => {
     const { data: session } = useSession();
      const router = useRouter();
      useEffect(()=>{
        if(!session){
            router.push("/")
        }
      })
  return (
    <div>
        <Form/>
    </div>
  )
}

export default CreatePost;