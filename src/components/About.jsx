import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -100,
    y: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-20px" });

  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-900 to-black text-white px-8"
    >
      <motion.div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-28"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="pb-8" variants={variants}>
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={variants}
          >
            About
          </motion.p>
        </motion.div>

        <motion.p className="text-xl mt-14" variants={variants}>
          Hello. I'm Jaswanth Reddy Gillella. I am currently pursing a Master of
          Computer Science Degree at the University of Central Missouri, where I
          am honing my skills and broadening my knowledge. I have 3 years of
          experience building and desgining software. My technical expertise
          includes working with technologies like React, Tailwind, Node JS and
          MongoDB.
        </motion.p>

        <br />

        <motion.p className="text-xl" variants={variants}>
          I worked as a React Developer at Hexagon CCI. In this position, I
          redefined my problem-solving ablities through promptly identifying and
          fixing bugs. I optimized the overall responsiveness and loading times
          of the application by incorporating advanced performance optimization
          techniques. Along with this I am fluent with classics like C++, Python
          and JavaScript. Whenever possible, I also apply my passion for
          developing products with Node.js and Modern Javascript Library and
          Frameworks like React.js and Next.js
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
