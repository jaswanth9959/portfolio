import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    x: -45,
    y: 10,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-50px" });
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-900 p-4 text-white"
      ref={ref}
    >
      <motion.div
        className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full"
        variants={variants}
        initial="initial"
        animate={isInView && "animate"}
      >
        <motion.div className="pb-8" variants={variants}>
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={variants}
          >
            Contact
          </motion.p>
          <motion.p className="py-6" variants={variants}>
            Submit the form below to get in touch with me
          </motion.p>
        </motion.div>

        <motion.div
          className=" flex justify-center items-center"
          variants={variants}
        >
          <motion.form
            action="https://getform.io/f/warddoda"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            variants={variants}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              variants={variants}
            />
            <motion.input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              variants={variants}
            />
            <motion.textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              variants={variants}
            ></motion.textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
