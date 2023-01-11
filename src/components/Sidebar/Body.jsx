import { PlaylistEl } from "./";
import { RiPlayListLine as Playlist } from "react-icons/ri";
import { AiOutlinePlusCircle as Add } from "react-icons/ai";
import { Link } from "react-router-dom";
import { genres } from "../../constants/genres";
import { useState } from "react";
export default function SidebarBody() {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`font-medium text-secondary my-4 h-full cursor-grab transition-all ${
        show ? "overflow-y-scroll " : "overflow-y-hidden "
      } pb-56 -mr-6 playlist`}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div className="flex justify-between items-center text-lg mb-4">
        <Link className="flex items-center gap-x-2 text-lg" to="/playlists">
          <Playlist />
          Playlists
        </Link>
        <div className="text-2xl">
          <Add />
        </div>
      </div>
      <div className="flex flex-col mr-4">
        {genres.map((genre, i) => (
          <PlaylistEl genre={genre} i={i} key={i} />
        ))}
      </div>
    </div>
  );
}
