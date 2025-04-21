import React from 'react'

export const TitleHeader = ({title, subtitle}) => {
  return (
    <div className='flex flex-col gap-5 items-center'>
       <div className="hero-badge">
        <p>{subtitle}</p>
       </div>   
        <h2 className='text-white md:text-5xl text-3xl font-semibold tracking-wide'>{title}</h2>
    </div>
  )
}
