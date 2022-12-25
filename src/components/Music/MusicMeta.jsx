import { useState } from "react";
import { PlayerItem } from "../Player";
import { useNavigate } from "react-router-dom";
import { BsPlay as Play, BsPause as Pause } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentlyPlaying } from "../../features/currentSong";
import { motion } from "framer-motion";
export function MusicMeta({ music, i }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleArtist() {
    navigate(`/artist/${music.artists[0].adamid}`, {
      state: { artist: music.artists[0].adamid },
    });
  }
  return (
    <div
      className={`flex justify-between items-center px-6 rounded-xl py-2 ${
        hover
          ? " bg-accent pl-4 text-primary2"
          : " bg-primary text-secondary transition-all"
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <motion.div
        className="flex gap-x-4 items-center"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex gap-x-4 items-center mr-8"
        >
          <p className="font-medium">{i + 1}</p>
          <Play
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(selectCurrentlyPlaying(music))}
          />
        </motion.div>
        <motion.img
          src={music?.images?.coverarthq}
          alt="user-profile"
          className="w-12 h-12 rounded-full"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="flex flex-col gap-x-2"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <p className="text-base font-bold w-64 text-ellipsis overflow-hidden whitespace-nowrap">
            {music.title}
          </p>
          <p
            className="text-sm font-medium w-64 text-ellipsis overflow-hidden whitespace-nowrap cursor-pointer"
            onClick={handleArtist}
          >
            {music.subtitle}
          </p>
        </motion.div>
      </motion.div>
      <p className="font-medium">1:29</p>
    </div>
  );
}
