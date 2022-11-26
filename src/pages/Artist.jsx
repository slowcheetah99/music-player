import Layout from "../layout";
import { AlbumMeta } from "../components/Played";
import { useLocation } from "react-router-dom";
import { useGetArtistQuery } from "../services/ShazamCore";
import Loading from "../components/Loader";
export default function Played() {
  const location = useLocation();
  const { data, error, isLoading } = useGetArtistQuery(location.state.artist);
  if (isLoading) return <Loading />;
  return (
    <Layout>
      <div className="bg-primary w-[75%] min-h-[60vh] -z-10 py-10 -mt-[85vh] ml-[25%] grid grid-cols-4 gap-6 pb-4 px-10 mb-28 -mt-[1050px]">
        {Object.values(data.albums).map((item, i) => (
          <AlbumMeta key={i} i={i} item={item} />
        ))}
      </div>
    </Layout>
  );
}
