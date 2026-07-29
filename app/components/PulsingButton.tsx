import { motion } from "motion/react"

const PulsingButton = ({text}) => {
  return (
    <motion.button className='bg-black p-4 px-8 rounded-2xl'
    animate={{ scale:[1, 1.2, 1], opacity:[ 1, 0.7, 1 ]}}
    transition={ {duration: 0.8, ease: "easeInOut",repeat: Infinity}}>
      <div className='text-white'>{text}</div>
    </motion.button>
  );
};

export default PulsingButton;