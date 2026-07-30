"use client"
import {motion} from "motion/react";
import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";
import DisappearingBox from "./components/DisappearingBox";
import CardFlip from './components/CardFlip';
import DragBox from "./components/DragBox";
import AnimatedCard from './components/AnimatedCard';
import Album from "./components/Album";
import RangeSlider from "./components/RangeSlider";

export default function Home() {
  return (
    <div>
{/*    
    <motion.div className="box" animate={{skew: 30}} /> 
 
    <motion.div className="box"  animate={{ x: [-50, 200, 0] }}
        transition={{ duration: 5, ease: "easeInOut" }} />


      <motion.div className="box m-20" animate={{
        scale: [2, 5, 7, 3], 
        rotate:[60, 180, 0, 360, 0],
        borderRadius: ["20%", "100%", "50%", "5%"]
        }}
        transition={{ duration: 5 }} /> 

        <PulsingButton text={"Hello"} />
    <BouncingLoader /> 
    <DisappearingBox />
    <CardFlip /> */}
    {/* <DragBox /> */}
    {/* <AnimatedCard /> */}
    {/* <Album /> */}
    <RangeSlider />
    </div>

  );
}
