import { RiRepeatLine as Repeat } from "react-icons/ri";
import { BsShuffle as Shuffle } from "react-icons/bs";
import { AiFillFastForward as FF } from "react-icons/ai";
import { BsPlay as Play, BsPause as Pause } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import "../../player.css";

export default function PlayerItem({
  handleChange,
  percentage,
  play,
  isPlaying,
  duration,
  currentTime,
}) {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(-16);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const rangeRef = useRef(null);
  const thumbRef = useRef(null);
  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setMarginLeft(centerThumb);
    setPosition(percentage);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  //duration controls
  function secondsToHms(seconds) {
    if (!seconds) return "0:00";
    let duration = seconds;
    let hours = duration / 3600;
    duration %= 3600;

    let min = parseInt(duration / 60);
    duration %= 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }

    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}:${min}:${sec}`;
    } else if (min === 0) {
      return `0:${sec}`;
    }
    return `${min}:${sec}`;
  }
  return (
    <div className="flex flex-col gap-y-3 h-fit w-1/5 items-center">
      <div className="w-full flex justify-between items-center">
        <Shuffle className="text-xl text-primary cursor-pointer" />
        <FF className="text-2xl rotate-180 text-primary cursor-pointer" />
        <div
          className="flex justify-center items-center w-14 h-14 rounded-full bg-primary cursor-pointer"
          onClick={play}
        >
          {isPlaying ? (
            <Pause className="text-3xl text-center" />
          ) : (
            <Play className="text-3xl text-center" />
          )}
        </div>
        <FF className="text-2xl text-primary cursor-pointer" />
        <Repeat className="text-xl text-primary cursor-pointer" />
      </div>

      <div className="flex w-[36rem] justify-between items-center">
        <p className="text-primary text-sm">{secondsToHms(currentTime)}</p>
        <div className="container w-[30rem] relative">
          <div
            className="w-[30rem] h-[4px] block absolute rounded-md top-1/2 -translate-y-1/2 z-50 select-none pointer-events-none bg-primary"
            style={{ width: `${progressBarWidth}px` }}
          />
          <div className="progress-bar" />
          <div
            className="thumb"
            ref={thumbRef}
            style={{ left: `${position}%`, marginLeft: `${marginLeft}px` }}
          />
          <input
            type="range"
            step="0.01"
            className="range w-full appearance-none bg-accent h-[4px] cursor-pointer opacity-0"
            value={position}
            onChange={handleChange}
            ref={rangeRef}
          />
        </div>
        <p className="text-primary text-sm">{secondsToHms(duration)}</p>
      </div>
    </div>
  );
}
