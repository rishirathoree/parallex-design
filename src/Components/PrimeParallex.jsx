import React, { useEffect, useMemo, useRef, useState } from 'react'
import prime from '../assets/prime.png'
const PrimeParallex = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const refs = [ref1,ref2,ref3,ref4]
    const [dontMakeThisAwkward,setDontMakeThisAwkward] = useState(true)
    const handleMouseMovement = (e) => {
        if(dontMakeThisAwkward){
            const clientX = e.clientX;
        const offsetX = (clientX / window.innerWidth - 0.5) * 100; // Adjust the multiplier for desired effect
        refs.forEach((item, idx) => {
            const offsetXAdjusted = clientX < window.innerWidth / 2 ? offsetX + idx * 10 : offsetX - idx * 10;
            item.current.style.transform = `translate(${offsetXAdjusted}px)`;
        });
        }
    };
    const memoizehandleMouseMovement = useMemo(()=>{
        return handleMouseMovement
    })
    useEffect(() => {
        refs.forEach((item) => {
            item.current.style.transform = 'translate(0)';
        });
    }, [dontMakeThisAwkward]);
  return (
    <>
    <div onClick={()=>{setDontMakeThisAwkward(p=>!p)}} onMouseMove={memoizehandleMouseMovement} className='overflow-hidden h-screen w-full bg-purple-50 relative flex p-2 items-center justify-center'>
            <div className='absolute z-50'><img src={prime} className='w-full h-full' alt="" /></div>
            <img src={prime} ref={ref1} className='absolute duration-1000 ' />
            <img src={prime}  ref={ref2} className='absolute duration-1000' alt="" />
            <img src={prime} ref={ref3} className='absolute duration-1000' alt="" />
            <img src={prime} ref={ref4} className='absolute duration-1000' alt="" />
    </div>
    </>
  )
}

export default PrimeParallex
