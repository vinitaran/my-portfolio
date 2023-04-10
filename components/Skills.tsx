"use client";
import { motion } from "framer-motion";

import TextHeading from "./TextHeading"
import Skill from "./Skill";

type Props = {}
function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration:2}}
      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center min-h-screen mx-auto items-center xl:space-y-0"
    >
        <TextHeading heading="Skills" />
        <h3 className="uppercase top-36 absolute tracking-[3px] text-gray-500 text-sm">Hover over a skill to check current proficiency</h3>
        <div className="grid grid-cols-4 gap-5">
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
  )
}
export default Skills