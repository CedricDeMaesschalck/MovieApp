import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { Imovie } from "@/types/movieTypes";
import { Link } from "expo-router";

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

const Index = () => {
  const [movies, setMovies] = useState<Imovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovies();
      setMovies(result);
    };
    fetchMovies();
  }, []);

  return (
    <ScrollView>  
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
      }}
    >
      {movies.length > 0 ? (
        movies.map((movie) => (
         
            <View style={{ marginBottom: 20, alignItems: "center" }}>
              <Link href={`/detail/${movie.id}`} asChild>
          <Pressable>
              <Image
                source={{ uri: movie.posterURL }}
                style={{ width: 150, height: 225, borderRadius: 8, marginBottom: 8 }}
                resizeMode="cover"
              />
    
          </Pressable>
          </Link>
          </View>
        ))
      ) : (
        <Text>Films laden...</Text>
      )}
    </View>
    </ScrollView> 
  );
};

export default Index;
