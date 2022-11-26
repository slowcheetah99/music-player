import { BsVolumeUp as Up, BsVolumeMute as Mute } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import "../../player.css";
export default function VolumeControls({ handleVolume, volume, audioRef }) {
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(-16);
  const [isMuted, setIsMuted] = useState(false);

  const thumbRef = useRef(null);
  const rangeRef = useRef(null);

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * volume * -1;
    const centerProgressBar =
      thumbWidth + (rangeWidth / 100) * volume - (thumbWidth / 100) * volume;
    setMarginLeft(centerThumb);
    setPosition(volume);
    setProgressBarWidth(centerProgressBar);
  }, [volume]);

  function handleMute() {
    if (!isMuted) {
      setIsMuted((state) => !state);
      audioRef.current.volume = 0;
      return;
    }
    setIsMuted((state) => !state);
    audioRef.current.volume = volume * 0.01;
    return;
  }
  return (
    <div className="flex w-52 h-fit justify-between items-center">
      <div
        className="grid place-items-center px-2 rounded-full cursor-pointer"
        onClick={handleMute}
      >
        {!isMuted ? (
          <Mute className="text-primary text-[1.75rem]" />
        ) : (
          <Up className="text-primary text-[1.5rem]" />
        )}
      </div>
      <div className="container w-[80%] relative">
        <div
          className="h-[4px] w-full block absolute rounded-md top-1/2 -translate-y-1/2 z-50 select-none pointer-events-none bg-white"
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
          className="range w-full appearance-none bg-primary h-[4px] cursor-pointer opacity-0"
          value={position}
          onChange={handleVolume}
          ref={rangeRef}
        />
      </div>
      {/* <Up className="text-primary text-[1.5rem]" /> */}
    </div>
  );
}
