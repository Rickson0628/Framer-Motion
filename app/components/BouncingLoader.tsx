import React from 'react';
import { motion } from 'motion/react';

const BouncingLoader = () => {
  return (
    <div className='flex  mt-5  gap-1 '>
      
      {[...Array(3)].map((_, index)=>(
       <motion.span key={index} className='bg-black rounded-2xl p-1' 
        animate={{ y: [0,-5,0]}}
        transition={{duration: 1, ease: "linear",repeat:Infinity , repeatDelay: index * 0.3}}>
          
       </motion.span> 
      ))}
    </div>
  );
};

export default BouncingLoader;