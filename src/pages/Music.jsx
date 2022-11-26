import { MusicMeta } from "../components/Music/MusicMeta";
import Layout from "../layout";
// import { useSelector } from "react-redux";
import { useGetPopularWorldWideQuery } from "../services/ShazamCore";
import { useEffect } from "react";
import Loading from "../components/Loader";
export default function Music() {
  const { data, error, isLoading } = useGetPopularWorldWideQuery();
  if (isLoading) return <Loading />;
  if (error) return <h1>Error</h1>;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Layout>
      <div className="bg-primary w-[75%] min-h-[60vh] z-[-1] py-10 ml-[25%] flex flex-col gap-y-4 pb-4 px-10 mb-28 mt-[-1050px]">
        {data.map((item, i) => (
          <MusicMeta key={item.key} i={i} music={item} />
        ))}
      </div>
    </Layout>
  );
}
