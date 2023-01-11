import Layout from "../layout";
import { useLocation } from "react-router-dom";
import { useGetArtistQuery } from "../services/ShazamCore";
import Loading from "../components/Loader";
import { MusicCard, VideoCard, AlbumCard } from "../components/Album";
import { useState } from "react";
import { Nav } from "../components/Album";
export default function Played() {
  const [view, setView] = useState("Songs");
  const location = useLocation();
  const { data, error, isLoading } = useGetArtistQuery(location.state.artist);
  if (isLoading) return <Loading />;
  return (
    <Layout>
      <div className="bg-primary2 w-[80%] min-h-screen h-fit z-10 py-20 ml-[20%] px-6 relative">
        <Nav setView={setView} />
        {/* songs */}
        <div className="grid grid-cols-4 gap-4">
          {view === "Songs" ? (
            data.data[0]?.views["top-songs"].data.map((item) => (
              <MusicCard item={item.attributes} key={item.id} />
            ))
          ) : view === "Videos" ? (
            data.data[0]?.views["top-music-videos"]?.data.map((item, i) => (
              <VideoCard item={item.attributes} key={item.id} />
            ))
          ) : data.data[0].views["full-albums"].length !== 0 ? (
            data.data[0]?.views["full-albums"]?.data.map((item, i) => (
              <AlbumCard item={item.attributes} key={item.id} />
            ))
          ) : data.data[0].views["featured-albums"].length !== 0 ? (
            data.data[0].views["featured-albums"].data.map((item, i) => (
              <AlbumCard item={item.attributes} key={item.id} />
            ))
          ) : (
            <p className="text-3xl text-slate-100">No Data to Display</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
