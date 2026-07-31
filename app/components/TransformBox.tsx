import { motion , useMotionValue, useTransform }from 'motion/react';

const TransformBox = () => {
  const xAxis = useMotionValue(0);

  const bgColor= useTransform(xAxis, [-150, 0 ,150], ["#12FF1A", "#7CF7E7", "#0E41E8"])

  return (
    <div>
      <motion.div className='box' drag dragConstraints={{left: -100, right:100}} style={{ x:xAxis, backgroundColor: bgColor}}></motion.div>
    </div>
  );
};

export default TransformBox;