import { useState } from 'react'
import Image from 'next/image'
export default function Uni() {
  const [selected, setSelected] = useState('write')

  const writeContent = (
    <>
      <p>This is the write content.</p>
      <Image src='/write.png' alt='Write' />
    </>
  )

  const learnContent = (
    <>
      <p>This is the learn content.</p>
      <Image src='/learn.png' alt='Learn' />
    </>
  )

  const presentContent = (
    <>
      <p>This is the present content.</p>
      <Image src='/present.png' alt='Present' />
    </>
  )

  return (
    <div>
      <div className='flex justify-end'>
        <button onClick={() => setSelected('write')}>Write</button>
        <button onClick={() => setSelected('learn')}>Learn</button>
        <button onClick={() => setSelected('present')}>Present</button>
      </div>
      <div className='flex'>
        <div className='w-1/2'>
          {selected === 'write' && writeContent}
          {selected === 'learn' && learnContent}
          {selected === 'present' && presentContent}
        </div>
        <div className='w-1/2'>
          {/* Image related to the selected content */}
        </div>
      </div>
    </div>
  )
}
