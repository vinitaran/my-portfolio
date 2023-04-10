"use client";
import ExperienceCard from "./ExperienceCard";
import TextHeading from "./TextHeading";
import { motion } from "framer-motion";

type Props = {};
function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-left  max-w-full px-10 justify-end mx-auto items-center overflow-hidden"
    >
      <TextHeading heading="Experience" />
      <div className="flex w-full space-x-5 overflow-x-auto snap-x p-5">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
export default Experience;
