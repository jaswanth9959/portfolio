import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import mongo from "../assets/mongo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    x: -30,
    y: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref2 = useRef();

  const isInView = useInView(ref2, { margin: "-20px" });
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-800",
    },
    {
      id: 7,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-900 via-black to-black w-full h-auto p-8 "
    >
      <motion.div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-24"
        initial="initial"
        ref={ref2}
        animate={isInView && "animate"}
      >
        <motion.div className="pb-8" variants={variants}>
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={variants}
          >
            Skills
          </motion.p>
          <motion.p className="py-6">
            These are the technologies I work with
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
          variants={variants}
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              variants={variants}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
