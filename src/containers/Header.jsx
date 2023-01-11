import bgImg from "/src/assets/images/1.jpg";
import { BiUserCircle as User } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
export default function Header() {
  const [hover, setHover] = useState(false);
  const { currentlyPlaying } = useSelector((state) => state.currentlyPlaying);

  return (
    <motion.div
      className={`w-[80%] h-[40vh] -top-[40vh] left-[20%] fixed pointer-events-auto`}
      style={{
        backgroundImage: `url(${currentlyPlaying.coverart})`,
        backgroundSize: "cover",
      }}
      animate={{ y: Object.keys(currentlyPlaying).length !== 0 ? "40vh" : "0" }}
      transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden backdrop-blur-[10px] bg-blur"></div>
      <div className="absolute top-12 left-12 flex gap-x-4 items-center">
        <div
          className="w-40 h-40 rounded-full"
          style={{
            backgroundImage: `url(${currentlyPlaying.coverart})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex flex-col gap-y-2 text-secondary">
          <p className="text-2xl font-bold">{currentlyPlaying.title}</p>
          <p className="text-md font-bold">{currentlyPlaying.artist}</p>
          {/* <button
            className={`flex w-fit gap-x-2 items-center px-4 py-2 bg-primary rounded-3xl text-secondary transition-all ${
              hover && " scale-105"
            }`}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <User className="text-3xl" />
            <Link to={`/art`}
            <span className="font-bold">Edit Profile</span>
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}
