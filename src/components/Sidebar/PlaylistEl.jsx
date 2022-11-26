import { MdAlbum as Album } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetGenreSongsQuery } from "../../services/ShazamCore";
export default function PlaylistEl({ genre, i }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  function handleGenreClick() {
    navigate(`/playlists/${genre.name.toLowerCase()}`, {
      state: { genre: genre.code },
    });
  }

  return (
    <div
      key={i}
      genre={genre}
      onClick={handleGenreClick}
      i={i}
      className={`flex gap-x-2 items-center py-4 cursor-pointer font-medium rounded-lg ${
        hover
          ? " bg-accent/20 pl-4 text-accent"
          : " text-secondary transition-all"
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Album className="text-xl" />
      <p>{genre.name}</p>
    </div>
  );
}
