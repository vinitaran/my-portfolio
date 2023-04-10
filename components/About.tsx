"use client";
import { motion } from "framer-motion";
import TextHeading from "./TextHeading";

type Props = {};
function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration:2}}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <TextHeading heading="About" />
      <motion.img
        src="/main.jpg"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 object-center xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-sm md:text-lg">
          Experienced web developer with a passion for creating functional and
          user-friendly websites. Skilled in HTML, CSS, and JavaScript, with
          proficiency in frontend frameworks such as React, React Native, and
          NextJS. Well-versed with backend technologies like NodeJS, and
          ExpressJS. Experience working in an agile environment, which has
          allowed her to collaborate closely with cross-functional teams, adapt
          to changing requirements and deliver high-quality software products
          efficiently. Adept at working independently or as part of a team, with
          strong attention to detail and the ability to meet tight deadlines.
          Passionate about staying up-to-date with the latest web development
          trends and technologies. Looking for new challenges and opportunities
          to expand her skills and contribute to exciting web projects.
        </p>
      </div>
    </motion.div>
  );
}
export default About;
