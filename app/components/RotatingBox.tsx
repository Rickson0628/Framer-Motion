import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react'

const RotatingBox = () => {
  const [y, setY] = useState(0);
  const [curScale, setCurScale] = useState(1);
  const [bg, setBg] = useState("#F5F200")
  const [curRotate, setCurRotate] = useState(-90)
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end end"], });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
    setY(Number(latest))
  })





  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1.2, 1])
  const rotate = useTransform(scrollYProgress, [0, 0.8, 1], [-90, 0, 90])
   const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.9, 1],
    ["#FF311A", "#48FF1A", "#FF1AE0", "#1A6AFF"]
  );

  useMotionValueEvent(scale, "change", (latest) => {

    setCurScale(Number(latest))
  });


  useMotionValueEvent(rotate, "change", (latest) => {

    setCurRotate(Number(latest))
  });


  useMotionValueEvent(backgroundColor, "change", (latest) => {

    setBg(latest)
  });

  return (

    <section ref={sectionRef} className="relative h-[180vh] ">

      <div className="sticky top-0 flex flex-col gap-20 h-screen items-center justify-center">
        <motion.div style={{ scale, rotate, backgroundColor }} className=' w-50 h-50 rounded-3xl flex flex-col justify-center items-center ' />

        <div className=' flex gap-5 justify-center items-center p-4 bg-white/5 rounded-2xl shadow-2xl '>
          <div>ScrollY:{(y.toFixed(2))}   </div>
          <div> | </div>
          <div>Scale: {curScale.toFixed(2)}  </div>
          <div> | </div>
          <div>Rotate: {curRotate.toFixed(2)}° </div>
          <div> | </div>
          <div>Background Color: {bg}</div>
        </div>
      </div>

    </section>
  );
};

export default RotatingBox;