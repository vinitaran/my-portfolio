"use client";
import { motion } from "framer-motion";

type Props = {};
function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-left"
        src="https://periscope-tech.com/wp-content/uploads/2021/05/Periscope-final-logo-05-1024x340.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer</h4>
        <p className="text-2xl font-bold mt-1">Periscope Technologies, Inc</p>
        <div className="flex space-x-2 my-2">
            {/* tech used */}
            <img className="h-10 w-10 rounded-full object-contain object-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
        </div>
        <p className="uppercase my-2 text-gray-300">Started.. Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>mobile-first front-end web development. It contains HTML, CSS and (optionally)</li>
            <li>mobile-first front-end web development. It contains HTML, CSS and (optionally)</li><li>mobile-first front-end web development. It contains HTML, CSS and (optionally)</li>
            <li>mobile-first front-end web development. It contains HTML, CSS and (optionally)</li>
        </ul>
      </div>
    </article>
  );
}
export default ExperienceCard;
