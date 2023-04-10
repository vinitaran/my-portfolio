"use client";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};
function Header({}: Props) {
  return (
    <header className="sticky p-5 top-0 flex justify-between items-center max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }}
        className="flex space-x-2"
      >
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://www.linkedin.com/in/vinita-rane-7595671aa/"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://instagram.com/_.luftschloss__?igshid=YmMyMTA2M2Y="
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://www.linkedin.com/in/vinita-rane-7595671aa/"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor="gray"
          url="https://instagram.com/_.luftschloss__?igshid=YmMyMTA2M2Y="
        />
      </motion.div>
      <motion.div initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }} className="flex flex-row items-center space-x-2 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          bgColor="transparent"
          fgColor="gray"
          network="email"
        />
        <p className="hidden md:inline-flex text-gray-400">GET IN TOUCH</p>
      </motion.div>
    </header>
  );
}
export default Header;
