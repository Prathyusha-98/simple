import React from 'react'
import Image from 'next/image'
const EndlessStory = () => {
  return (
    <section className="story">
      <div className="w-full h-full relative" style={{ paddingBottom: "52%" }}>
        <div className='absolute top-0 left-0 w-full h-full'>
        <Image
          src="/images/EndlessStory.svg"
          alt="Endless Story Image"
          layout="fill"
          objectFit="cover"
        />
        </div>
        <div className='absolute'>
        <div className="endless">
         Endless Stories
        </div>
        <div className='endless-content'>
        Inspire <span>creativity</span> in kids and foster interactive, educational moments for families.
        </div>
        </div>


        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        
        <div className='relative'>
            <Image src="/images/story.gif"
            alt="Story GIF"
            width={240}
            height={406}
            className='gif' />
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default EndlessStory