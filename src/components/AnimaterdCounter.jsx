import React, { useRef } from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const AnimaterdCounter = () => {

    const scrollRef = useRef()

    useGSAP(()=>{
      const counterItems = gsap.utils.toArray(scrollRef.current.children)
      counterItems.forEach((item) => {
        gsap.from(item, {
            opacity: 0,
            y: 50,
        })
      })
    }, {scope: scrollRef})

  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols' ref={scrollRef}>
            {counterItems.map((item)=>(
               <div key={item.label}  className='counter-item bg-zinc-900 rounded-lg p-10 flex flex-col justify-center gap-2'>
                    <div className='text-white font-bold mb-2 text-5xl'>
                        <CountUp end={item.value} suffix={item.suffix}/>
                    </div>
                    <div className='text-white-50 text-lg'>
                        {item.label}
                    </div>
               </div>
            ))}
        </div>
    </div>
  )
}

export default AnimaterdCounter