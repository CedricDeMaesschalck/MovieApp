import { Imovie } from "@/types/movieTypes";

const getMovies = async (): Promise<Imovie[]> => {
  try {
    const headers = {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNlZHJpYy5kZW1hZXNzY2hhbGNrQHN0dWRlbnQuYXAuYmUiLCJpYXQiOjE3NjMzODU1NTR9.XriCBTflRIr19LByloz2qVw5Fj3yLNF_ag6DdpJr1qk"
    };

    const url = "https://sampleapis.assimilate.be/movies/comedy";

    const response = await fetch(url, { headers });
    const data: Imovie[] = await response.json();

    return data.sort(() => 0.5 - Math.random()).slice(0, 6);
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
};

export default getMovies;