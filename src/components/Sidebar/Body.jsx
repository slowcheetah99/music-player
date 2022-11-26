import { PlaylistEl } from "./";
import { RiPlayListLine as Playlist } from "react-icons/ri";
import { AiOutlinePlusCircle as Add } from "react-icons/ai";
import { useGenres } from "../../hooks/useGenres";
import { Link } from "react-router-dom";
import SkeletonLoader from "../SkeletonLoader";
import { genres } from "../../constants/genres";
export default function SidebarBody() {
  //uncomment after the development process is finished or not, because of the genre codes
  // const { genres, isLoading, error } = useGenres();
  // if (isLoading) return <SkeletonLoader />;

  return (
    <div className="font-medium text-secondary my-4">
      <div className="flex justify-between items-center text-lg mb-4">
        <Link className="flex items-center gap-x-2 text-lg" to="/playlists">
          <Playlist />
          Playlists
        </Link>
        <div className="text-2xl">
          <Add />
        </div>
      </div>
      <div className="flex flex-col">
        {genres.map((genre, i) => (
          <PlaylistEl genre={genre} i={i} key={i} />
        ))}
      </div>
    </div>
  );
}
