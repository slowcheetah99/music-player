//this is where we will make the API calls
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://shazam-core.p.rapidapi.com/v1";

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
      query: () => "/charts/world",
    }),

    //get genres
    getGenres: builder.query({
      query: () => "/frame/cities",
    }),
    //chart by genre

    getGenreSongs: builder.query({
      query: (genre) => {
        if (!genre) {
          genre = "POP";
        }
        return {
          url: "charts/genre-world",
          params: {
            genre_code: genre,
          },
        };
      },
    }),

    getArtist: builder.query({
      query: (artist) => {
        return {
          url: "artists/details",
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
