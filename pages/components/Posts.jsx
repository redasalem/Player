import React from 'react'
import PostDetails from './PostDetails'

const Posts = ({ posts }) => {
  // ✅ التحقق الآمن من وجود posts
  if (!posts || !Array.isArray(posts)) {
    return (
      <div className='flex items-center justify-center h-50'>
        <h1 className='font-bold text-red-700 text-2xl'>No posts available</h1>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center gap-2 flex-wrap mt-10'>
      {/* ✅ استخدام posts?.length بدل posts.length
      {posts.length === 0 && (
        <div className='flex items-center justify-center h-50'>
          <h1 className='font-bold text-red-700 text-2xl'>There are no posts</h1>
        </div>
      )} */}
      
      {/* ✅ استخدام posts?.map للتحقق الآمن */}
      {posts.map((item, index) => (
        <PostDetails key={index} post={item}/>
      ))}
    </div>
  )
}

export default Posts