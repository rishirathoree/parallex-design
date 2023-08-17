import React, { useRef } from 'react'
import avatar from '../../src/assets/avtr.png'
const EyeParallexRolling = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const refs = [ref1,ref2]
    const handleMovement = (e) => {
        const clientX = e.clientX;
        const clientY = e.clientY;
        refs.forEach((item,idx)=>{
            const offsetX = clientX - window.innerWidth / 2;
            const offsetY = clientY - window.innerHeight / 2;
            const translateX = offsetX < 0 ? -Math.abs(offsetX) / 170 : offsetX / 170;
            const translateY = offsetY < 0 ? -Math.abs(offsetY) / 120 : offsetY / 120;
    item.current.style.transform = `translate(${translateX}px,${translateY}px)`;
        })
    }
  return (
    <div onMouseMove={handleMovement} className='bg-purple-500 relative h-screen'>
        <img src={avatar} className='w-full h-full object-contain ' alt="" />
        <div ref={ref1} className='w-2 h-2 bg-white duration-100 shadow shadow-white rounded-full absolute top-[36.3%] left-[47.3%]'></div>
        <div ref={ref2} className='w-2 h-2 bg-white duration-100 shadow shadow-white rounded-full absolute top-[36.3%] left-[52.3%]'></div>
    </div>
  )
}

export default EyeParallexRolling
