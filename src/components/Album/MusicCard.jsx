import { useState } from "react";
import { AiOutlineClose as Close } from "react-icons/ai";
import { BsPlayFill as Video } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { selectCurrentlyPlaying } from "../../features/currentSong";
import { useDispatch } from "react-redux";

export default function MusicCard({ item }) {
  const dispatch = useDispatch();
  // const [show, setShow] = useState(false);
  //audio is on item.previews.url
  //artist name is on item.artistName

  const song = {
    title: item?.name,
    artist: item?.artistName,
    url: item?.previews?.url,
    coverart: item?.artwork?.url,
  };
  return (
    <div className="w-full h-72">
      <div
        // onClick={() => setShow(true)}
        className="w-full h-full"
      >
        <div className="w-full h-[60%] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-primary2/50" />
          <img
            src={item?.artwork?.url}
            alt="image"
            className="object-cover w-full h-full"
          />
          <Video
            className="text-3xl bg-accent absolute top-1/2 left-1/2 -translate-x-1/2 z-50 rounded-md cursor-pointer"
            onClick={() => dispatch(selectCurrentlyPlaying(song))}
          />
        </div>
        <div className="border-b-2 border-secondary flex flex-col justify-center py-4 pl-4 rounded-lg">
          <p className="text-base font-bold  w-44 text-ellipsis overflow-hidden whitespace-nowrap text-secondary">
            {item.name}
          </p>
          <p className="text-sm font-medium text-secondary whitespace-nowrap w-full">
            {item.artistName}
          </p>
        </div>
      </div>

      {/* <MusicModal item={item} setShow={setShow} show={show} /> */}
    </div>
  );
}

// function MusicModal({ item, setShow, show }) {
//   return (
//     <motion.div
//       className="fixed top-full left-0 w-full h-full bg-primary/50 backdrop-blur-sm grid place-items-center"
//       animate={show ? { y: "-100%", opacity: 1 } : { y: 0, opacity: 0 }}
//       transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
//     >
//       <Close
//         className="text-4xl text-slate-100 absolute top-6 right-6 cursor-pointer"
//         onClick={() => {
//           setShow(false);
//         }}
//       />
//       <div className="w-1/2 h-1/2 bg-secondary flex">
//         <div
//           className="w-1/4 h-full bg-center bg-cover"
//           style={{ backgroundImage: `url(${item.artwork.url})` }}
//         />

//         <div className="w-3/4 h-full p-4 text-primary">
//           <h2 className="text-xl border-b-[1.5px] pb-2 border-primary">
//             {item.name}
//           </h2>
//           <p className="text-lg border-b-[1.5px] py-2 border-primary">
//             {item.albumName}
//           </p>
//           <p className="text-base border-b-[1.5px] py-2 border-primary">
//             {item.artistName}
//           </p>
//           <div className="flex gap-x-4 border-b-[1.5px] py-2 border-primary">
//             {item.genreNames.map((genre, i) => (
//               <p
//                 key={genre}
//                 className="px-3 py-1 bg-primary rounded-full text-slate-100"
//               >
//                 {genre}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
