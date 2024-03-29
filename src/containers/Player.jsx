import bgImg from "/src/assets/images/12.jpg";
import { motion } from "framer-motion";
import { PlayerItem, VolumeControls } from "../components/Player";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
// import { currentlyPlaying } from "../features/currentSong";
// import song from "/src/assets/songs/wonderwall.mp3";
export default function Player({ setShow }) {
  //state to handle the custom player
  const [percentage, setPercentage] = useState(0);
  //volume to start at 50% so that audio is not muted when song is played
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const { currentlyPlaying } = useSelector((state) => state.currentlyPlaying);
  function handleChange(e) {
    audioRef.current.currentTime =
      (audioRef.current.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  }

  function handleVolume(e) {
    //setting volume of song at start
    audioRef.current.volume = e.target.value * 0.01;
    setVolume(e.target.value);
  }

  function play() {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef.current.play();
      audioRef.current.volume = volume * 0.01;
      return;
    }
    setIsPlaying(false);
    audioRef.current.pause();
    return;
  }

  function getCurrDuration(e) {
    const percent =
      (e.currentTarget.currentTime / e.currentTarget.duration) * 100;
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  }
  return (
    <motion.div
      className={`fixed bottom-0 transition-all left-0 w-full h-28 pointer-events-auto z-50`}
      animate={{
        y: Object.keys(currentlyPlaying).length !== 0 ? "0%" : "100%",
      }}
      transition={{ duration: 0.75, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <img
        src={currentlyPlaying?.coverart}
        alt="player image"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[20px] bg-blur2" />
      <div className="flex justify-between items-center z-50 absolute top-1/2 -translate-y-1/2 left-0 w-full px-8">
        <div className="flex gap-x-4 items-center w-fit">
          <>
            <img
              src={currentlyPlaying?.coverart}
              alt="artist image"
              className="w-20 h-20 rounded-full object-cover object-center"
            />
            <div>
              <p className="text-base font-bold text-secondary">
                {currentlyPlaying.title}
              </p>
              <p className="text-sm font-medium text-secondary">
                {currentlyPlaying.artist}
              </p>
            </div>
          </>
        </div>
        <PlayerItem
          percentage={percentage}
          handleChange={handleChange}
          play={play}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
        />
        <audio
          src={currentlyPlaying?.url}
          ref={audioRef}
          onLoadedData={(e) => {
            setDuration(e.currentTarget.duration);
          }}
          onTimeUpdate={getCurrDuration}
        />
        <VolumeControls
          handleVolume={handleVolume}
          volume={volume}
          audioRef={audioRef}
        />
      </div>
    </motion.div>
  );
}

//song url
//song title
//song subtitle
//coverart
