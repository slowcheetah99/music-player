import Layout from "../layout";
import { MusicMeta } from "../components/Music/MusicMeta";
import { useLocation } from "react-router-dom";
import { useGetGenreSongsQuery } from "../services/ShazamCore";
import Loading from "../components/Loader";
export default function Playlist() {
  const location = useLocation();
  const genre = location.state.genre;
  const { data, error, isLoading } = useGetGenreSongsQuery(genre);
  if (isLoading) return <Loading />;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Layout>
      <div className="bg-primary w-[75%] min-h-[60vh] -z-10 py-10 -mt-[85vh] ml-[25%] flex flex-col gap-y-4 pb-4 px-10 -mt-[1050px]">
        {data.map((item, i) => (
          <MusicMeta key={i} i={i} music={item} />
        ))}
      </div>
    </Layout>
  );
}
