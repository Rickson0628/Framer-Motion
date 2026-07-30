import { animate } from 'motion';
import { motion, useMotionValue, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';


const RangeSlider = () => {
  // const scale = useSpring(Number(1))
  const scale = useMotionValue(Number(1))
  const [scaler, setScaler] = useState(1)

  const handleScaler = (event) => {
    const value = Number(event.target.value)
    // scale.set(value)
    setScaler(value)
    animate(scale, value, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });

  }

  useMotionValueEvent(scale, "animationStart", () => {
    console.log("animation started on x")
  })

  useMotionValueEvent(scale, "change", (latest) => {
    console.log("x changed to", latest)
  })


  return (
    <div className='flex flex-col gap-50'>
      <motion.div
        className="box"
        style={{ scale }}
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          rotate: 10,
        }}
        whileTap={{
          opacity: 0.7,
        }}
        drag
        whileDrag={{
          rotate: -10,
          cursor: "grabbing",
        }}
        dragConstraints={{
          top: -100,
          left: -100,
          bottom: 100,
          right: 100,
        }}
        // dragMomentum={false}
        // dragElastic={2}
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 0.5 },
          rotate: { duration: 0.2 },
        }}
      />
      <div className='flex flex-col'>
        <label htmlFor="scaler">Scaler Value:{scaler}</label>
        <input type="range" id='scaler' name="scaler" min="0" max="7" value={scaler} onChange={handleScaler} />
      </div>
    </div>
  );
};

export default RangeSlider;


