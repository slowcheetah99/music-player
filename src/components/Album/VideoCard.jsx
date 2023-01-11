import { useState } from "react";
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsPlayFill as Video } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
export default function VideoCard({ item }) {
  //audio is on item.previews.url
  //artist name is on item.artistName
  const [show, setShow] = useState(false);
  return (
    <div className="w-full h-72">
      <div
        className="w-full h-[60%] overflow-hidden cursor-pointer"
        onClick={() => setShow(true)}
      >
        <img
          src={item?.artwork?.url}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="border-b-2 border-secondary flex flex-col justify-center py-4 pl-4 rounded-lg">
        <p className="text-base font-bold  w-44 text-ellipsis overflow-hidden whitespace-nowrap text-secondary">
          {item.name}
        </p>
        <p className="text-sm font-medium text-secondary whitespace-nowrap text-ellipsis w-52 overflow-hidden">
          {item.artistName}
        </p>
      </div>
      {show && <VideoModal item={item} setShow={setShow} show={show} />}
    </div>
  );
}

function VideoModal({ item, setShow, show }) {
  return (
    <motion.div
      className="fixed top-full left-0 w-full h-full bg-primary/50 backdrop-blur-sm grid place-items-center"
      animate={show ? { y: "-100%", opacity: 1 } : { y: "0%", opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
    >
      <Close
        className="text-4xl text-slate-100 absolute top-6 right-6 cursor-pointer"
        onClick={() => {
          setShow(false);
        }}
      />
      <div className="w-10/12 h-[80vh] bg-secondary p-2">
        <div className="w-full h-[80%] bg-cover bg-top-left bg-accent mb-4 relative">
          <video
            src={`${item.previews[0].url}`}
            controls
            className="w-full h-full"
            poster={`${item.previews[0].artwork.url}`}
          />
          {/* <Video className="absolute top-1/2 left-1/2 text-5xl bg-accent -translate-x-1/2 rounded-lg" /> */}
        </div>
        <div className="w-full h-2/12 flex justify-between items-center">
          <div className="w-10/12">
            <h2 className="text-xl font-bold mb-1">{item.name}</h2>
            <p className="text-base font-semibold overflow-hidden w-full text-ellipsis whitespace-nowrap mb-1">
              {item.artistName}
            </p>
            <p className="text-sm font-semibold pb-2">
              Released {item.releaseDate}
            </p>
          </div>
          <a
            href={`${item.url}`}
            className="w-fit h-fit px-4 py-2 bg-accent text-primary font-bold rounded-md"
          >
            Full Video
          </a>
        </div>
      </div>
    </motion.div>
  );
}
