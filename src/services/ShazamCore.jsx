//this is where we will make the API calls
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://shazam-core.p.rapidapi.com/";

export const shazamCore = createApi({
  reducerPath: "shazamCore",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //world chart
    getPopularWorldWide: builder.query({
      query: () => "v1/charts/world",
    }),

    //get genres
    getGenres: builder.query({
      query: () => "v1/frame/cities",
    }),
    //chart by genre

    getGenreSongs: builder.query({
      query: (genre) => {
        if (!genre) {
          genre = "POP";
        }
        return {
          url: "v1/charts/genre-world",
          params: {
            genre_code: genre,
          },
        };
      },
    }),

    getArtist: builder.query({
      query: (artist) => {
        return {
          url: "v2/artists/details",
          params: {
            artist_id: artist,
          },
        };
      },
    }),

    //get songs by the top-rated artists
  }),
});

export const {
  useGetPopularWorldWideQuery,
  useGetGenresQuery,
  useGetGenreSongsQuery,
  useGetArtistQuery,
} = shazamCore;
