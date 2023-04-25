import React from 'react'
import BannerBlog from '../../comps/media/blogs/Banner'
import BlogContent from '../../comps/media/blogs/BlogContent'

export default function BlogDetail() {
  return (
    <>
        <div className='blog-detail-wrapper'> 
            <BannerBlog/>
            <BlogContent/>
        </div>
    </>
  )
}
