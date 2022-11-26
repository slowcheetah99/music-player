import { useGetGenresQuery } from "../services/ShazamCore";
export function useGenres() {
  const genreSet = new Set();
  const { data, error, isLoading } = useGetGenresQuery();

  if (isLoading) {
    return {
      genres: null,
      isLoading,
      error,
    };
  }

  data.forEach((item) => {
    item?.genres?.forEach((genre) => {
      genreSet.add(genre.name);
    });
  });

  let genres = Array.from(genreSet);
  return {
    genres,
    error,
    isLoading,
  };
}
