import { MusicMeta } from "../components/Music/MusicMeta";
import Layout from "../layout";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useGetPopularWorldWideQuery } from "../services/ShazamCore";
import Loading from "../components/Loader";
export default function Music({ second, setSecond, params }) {
  const { data, error, isLoading } = useGetPopularWorldWideQuery();
  const { currentlyPlaying } = useSelector((state) => state.currentlyPlaying);
  if (isLoading) return <Loading params={params} />;
  if (error) return <h1>Error</h1>;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <Layout>
      <motion.div
        className={`bg-primary2 w-[80%] min-h-[60vh] py-10 absolute top-0 left-[20%] flex flex-col gap-y-4 pb-4 px-10`}
        animate={
          Object.keys(currentlyPlaying).length !== 0
            ? { y: "40vh", zIndex: -1, marginBottom: "7rem" }
            : { y: "0", zIndex: 10, marginBottom: "0rem" }
        }
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {data.map((item, i) => (
          <MusicMeta key={item.key} i={i} music={item} />
        ))}
      </motion.div>
    </Layout>
  );
}
