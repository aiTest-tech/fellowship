import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;

interface MediaData {
  id: number;
  created_at: string; 
  updated_at: string; 
  title_eng: string;
  img: string; 
  title_guj: string;
  active_deactivate: boolean;
}


const baseurl = `http://${host}:${port}/`

// Define a service using a base URL and expected endpoints
export const MediaDataApi = createApi({
  reducerPath: "mediaApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseurl + 'api/' }),
  endpoints: (builder) => ({
    getMediaData: builder.query<MediaData[], string>({
      query: () => `mediaurl/`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMediaDataQuery } = MediaDataApi;
