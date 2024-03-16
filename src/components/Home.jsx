import HeroImage from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "MERN Stack Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

const Home = () => {
  const variants = {
    initial: {
      x: -40,
      opacity: 0,
    },
    initialR: {
      x: 45,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900 "
    >
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row "
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="flex flex-col justify-center h-full "
          variants={variants}
        >
          <motion.h5
            className="text-2xl sm:text-4xl font-light text-white py-4"
            variants={variants}
          >
            Hi there!
            <motion.span variants={variants}>👋🏻</motion.span>
          </motion.h5>
          <motion.h2
            className="text-4xl sm:text-7xl font-bold text-white "
            variants={variants}
          >
            I'm Jaswanth Reddy.
          </motion.h2>

          <motion.h2
            className="text-2xl sm:text-4xl font-semibold text-white py-6"
            variants={variants}
          >
            <Type />
          </motion.h2>

          <motion.div variants={variants}>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={variants} initial="initialR" animate="animate">
          <motion.img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            variants={variants}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
