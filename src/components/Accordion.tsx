'use client'

import React, { useState } from 'react'

type AccordionData = {
  title: string
  description: string
}

type AccordionProps = {
  data: AccordionData[]
}

const Accordion = ({ data }: AccordionProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(selected === index ? null : index);
  }
  return (
    <div className='grid gap-4'>
      {data.map((item, index) => (
        <div key={index} className='grid gap-2'>
          <div className={`max-h-0 overflow-hidden transition-all duration-300 ${selected === index && 'h-auto !max-h-full'}`}>
            <p className='text-sm'>
              {item.description}
            </p>
          </div>
          <div className="flex justify-center p-4 py-2 border border-gray-400 relative cursor-pointer" onClick={() => handleSelect(index)}>
            <p className="text-center">{item.title}</p>
            <span className="absolute right-3">
              {selected === index ? <span>&#65087;</span> : <span>&#65088;</span>}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion