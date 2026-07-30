import React from 'react';
import { motion } from 'motion/react';

const DragBox = () => {
  return (
    <div>

      {/* Drag Box */}
      {/* <motion.div className='bg-amber-400 w-20 h-30 p-4' drag dragConstraints={{ top:10, bottom:10, left:10, right:10 }}>
          Drag Me
      </motion.div> */}
      

      {/* Tap Box */}
      {/* <motion.div className='bg-amber-400 w-20 h-30 p-4' whileTap={{scale: 0.6, background:"green"}}
      transition={{type:"spring", stiffness:300  }}></motion.div>
       */}


<motion.div
  className="h-30 w-20 bg-amber-400 p-4"
  whileHover={{
    scale: 1.2,
    rotate: [0, 180, 90],
    backgroundColor: "#22c55e",
  }}
  transition={{
    rotate: {
      type: "tween",
      duration: 0.6,
      ease: "easeInOut",
    },
    scale: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
    backgroundColor: {
      duration: 0.3,
        
    },
  }}
/>

    </div>
  );
};

export default DragBox;