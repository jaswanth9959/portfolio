import collabcube from "../assets/proj1.jpg";
import easystay from "../assets/easystay.png";
import usepop from "../assets/usepopcorn.png";
import quiz from "../assets/quiz.png";
import proshop from "../assets/proshop.png";
import { useRef } from "react";
import { VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const Portfolio = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-20px" });

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

  const portfolios = [
    {
      id: 1,
      src: collabcube,
      title: "collabcube",
      demo: "",
      git: "https://github.com/jaswanth9959/CollabCube",
    },
    {
      id: 2,
      src: easystay,
      title: "EasyStay",
      demo: "",
      git: "https://github.com/jaswanth9959/easy-stay",
    },
    {
      id: 3,
      src: proshop,
      title: "ProShop",
      demo: "",
      git: "https://github.com/jaswanth9959/proshop-final",
    },
    {
      id: 4,
      src: quiz,
      title: "Quizz App",
      demo: "",
      git: "https://github.com/jaswanth9959/react-quiz",
    },
    // {
    //   id: 5,
    //   src: proj,
    //   title: "Memories",
    //   demo: "",
    //   git: "https://github.com/jaswanth9959/",
    // },
    {
      id: 6,
      title: "Moviez",
      src: usepop,
      demo: "",
      git: "https://github.com/jaswanth9959/Movies",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-gray-900 w-full h-auto p-8 "
    >
      <motion.div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-24"
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}
      >
        <motion.div className="pb-8" variants={variants}>
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={variants}
          >
            Portfolio
          </motion.p>
          <motion.p className="py-6">Check out my recent work here</motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"
          variants={variants}
        >
          {portfolios.map(({ id, src, git, demo, title }) => (
            <motion.div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg "
              variants={variants}
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 h-auto w-full "
              />
              <h4 className="text-white text-xl pt-2 flex items-center justify-center">
                {title}
              </h4>
              <div className="flex items-center justify-center px-2">
                {git && (
                  <button className=" flex items-center justify-center font-light  w-1/2 px-6 py-2 m-2 duration-300 hover:scale-105 rounded hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    <a
                      href={git}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center items-center w-full"
                    >
                      {" "}
                      Code{" "}
                      <span className="pl-3">
                        <FaGithub />
                      </span>
                    </a>
                  </button>
                )}
                {demo && (
                  <button className=" flex items-center justify-center font-light w-1/2 px-6 py-2 m-2 duration-300 hover:scale-105 rounded hover:bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    <a
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center items-center w-full"
                    >
                      Demo{" "}
                      <span className="pl-3">
                        <VscPreview />
                      </span>
                    </a>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
