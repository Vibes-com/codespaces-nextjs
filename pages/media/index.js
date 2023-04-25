import React from 'react'
import MediaSection from '../../comps/media/listing/MediaSection'
import BlogSection from '../../comps/media/listing/BlogSection'
import { Container } from 'react-bootstrap'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import LinkedinFeeds from '../../comps/media/listing/Linkedin'
export default function MediaCoverage() {

    useEffect(() => {
      AOS.init({
        delay:50,
        duration: 2000,
      });
    }, [])
  return (
    <>
        <Container>
            <div className="mediaWrapper">  
              <div className='d-flex row'>
                <div className='col-lg-8'>
                  <MediaSection />
                  
                  <LinkedinFeeds/>
                </div>
                <div className='col-lg-4' >
                    <BlogSection />
                </div>
              </div>
            </div>
        </Container>
    </>
  )
}
