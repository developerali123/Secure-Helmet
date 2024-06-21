//@ts-nocheck
import Image from 'next/image';
import React from 'react';

export default function Protection({ img, text, para }) {
  return (
    <div className='bg-white p-4 border border-[#253D55] rounded-lg shadow col-span-4'>
        <Image src={img} alt="" className="w-full h-auto" width={300} height={300} />
        <h2 className="text-2xl font-bold text-[#253D55] mt-4">Protection</h2>
        <h3 className="text-xl text-[#253D55] mt-2">{text}</h3>
        <p className="text-[#253D55] mt-2">{para}</p>
    </div>
  );
}
