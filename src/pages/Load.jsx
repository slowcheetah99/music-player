import { motion, AnimatePresence } from "framer-motion";
import ColorScheme from "color-scheme";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../assets/images/images";
export default function Load({ second, setSecond, setParams, params }) {
  // const scheme = new ColorScheme();
  // scheme.from_hue(21).scheme("tetrade").variation("pastel");
  // const colors = scheme.colors();
  // colors.splice(9, 1, "F472B6");
  //end of initial animation
  const [end, setEnd] = useState(false);
  //end of transition animation

  const navigate = useNavigate();
  const page = useRef(null);

  const layoutVariant = {
    animate: end
      ? {
          scale: 4,
          y: -325,
          x: 650,
          transition: {
            duration: 2.5,
            ease: "easeIn",
          },
        }
      : {
          scale: 1,
          y: 0,
          x: 0,
        },
  };

  function handleNavigate() {
    setSecond(true);
    setParams({
      width: page.current.getBoundingClientRect().width,
      height: page.current.getBoundingClientRect().height,
    });

    if (second) {
      navigate("/music", {
        state: {
          origin: "/music",
        },
      });
      setSecond(false);
    }
  }
  return (
    <motion.div className="w-screen h-screen bg-[#111] overflow-hidden">
      <motion.div
        className="w-full h-full grid grid-rows-4 grid-cols-4 gap-5 overflow-hidden"
        animate="animate"
        variants={layoutVariant}
        onAnimationComplete={handleNavigate}
      >
        <AnimatePresence>
          {images.map((image, i) => (
            <motion.div
              className={`w-full h-full relative`}
              key={`${image}-${i}`}
              ref={page}
              initial={
                i % 2 !== 0 ? { y: 800, opacity: 0 } : { y: -800, opacity: 0 }
              }
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2.5,
                ease: [0.76, 0, 0.24, 1],
                delay: i % 2 === 0 ? (images.length - i) * 0.1 : i * 0.1,
              }}
              onAnimationComplete={() => setEnd(true)}
            >
              <img
                className="w-full h-full object-cover object-center absolute top-0 left-0"
                src={image}
                alt="images"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
