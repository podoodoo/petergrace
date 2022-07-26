import "./App.css";
import Home from "./pages/Home";
import Rsvp from "./pages/Rsvp";
import Info from "./pages/Info";
import Registry from "./pages/Registry";
import Pictures from "./pages/Pictures";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import images from "./images.jsx";

const parentVariants = {
  removed: {
    opacity: 0,
    transition: {
      opacity: {
        type: "tween",
        duration: 1,
      },
    },
  },
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 2,
      delayChildren: 2,
      staggerChildren: 0.5,
      type: "tween",
      duration: 1,
      opacity: {
        type: "tween",
        duration: 0.4,
      },
    },
  },
};

const childrenVariants = {
  hidden: {
    height: "0",
  },
  show: {
    height: "100%",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

function App() {
  const [isAnimatingGallerie, setIsAnimatingGallerie] = useState(false);
  const [isLandingTime, setIsLandingTime] = useState(true);

  const weddingDate = new Date(1659182400000);
  const nowDate = new Date().getTime();

  const live = nowDate - weddingDate > 0;

  useEffect(() => {
    setTimeout(() => {
      setIsAnimatingGallerie(true);
    }, 1000);
    setTimeout(() => {
      setIsLandingTime(false);
    }, 7000);
  }, []);

  useEffect(() => {
    if (isAnimatingGallerie) {
      setTimeout(() => {
        setIsAnimatingGallerie(false);
      }, 6000);
    }
  }, [isAnimatingGallerie]);

  return (
    <>
      {isLandingTime && (
        <motion.div className="fixed z-50 w-full h-full inset-0 flex items-center mx-auto bg-white text-[#131313]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="text-2xl md:text-6xl text-center mx-auto"
          >
            {live ? (
              <>Thank you for joining us!</>
            ) : (
              <>
                Save the date!
                <br />
                July 30, 2022
              </>
            )}
          </motion.div>
        </motion.div>
      )}
      <AnimatePresence>
        {isAnimatingGallerie && (
          <motion.div
            style={{
              zIndex: 999,
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            variants={parentVariants}
            initial="hidden"
            animate="show"
            exit="removed"
          >
            {images.map((img) => (
              <motion.div
                variants={childrenVariants}
                key={img}
                style={{
                  bottom: 0,
                  overflow: "hidden",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              >
                <motion.img
                  style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    objectPosition: "center",
                    bottom: 0,
                  }}
                  src={img}
                ></motion.img>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <main className="bg-[url('./assets/background.png')] md:bg-[url('./assets/background2.png')] bg-no-repeat md:bg-cover bg-fixed">
        <div className="flex container justify-center align-center m-auto flex-col h-full max-w-7xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.25)] bg-[rgb(254,254,254,0.75)]">
          <section className="w-full h-screen">
            <Home />
          </section>
          <section className="w-full mb-10 mt-10 md:mt-0">
            <Info />
          </section>
          <section className="w-full mb-10 mt-10 md:mt-0">
            <Pictures />
          </section>
          <section className="w-full mb-24 mt-10 md:mt-0">
            <Registry />
          </section>
          <section className="w-full md:mb-40 flex align-center">
            <Rsvp />
          </section>
          <footer className="h-8 bg-red-100 flex justify-center pt-2">
            <div className="h-2 text-xs">©happilyeverbaes 2022</div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
