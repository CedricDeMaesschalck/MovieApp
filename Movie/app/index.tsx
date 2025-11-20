import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { Imovie } from "@/types/movieTypes";
import { Link } from "expo-router";
import getMovies from "@/services/api/movies";


const Index = () => {
  const [movies, setMovies] = useState<Imovie[]>([]);

  useEffect(() => {
    getMovies().then(setMovies);
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
        <View 
         key={movie.id}
         style={{ marginBottom: 20, alignItems: "center" }}
        >
        <Link
        href={{
          pathname: "/detail/[id]",
          params: {
            id: movie.id.toString(),
            title: movie.title,
            posterURL: movie.posterURL,
            rating: movie.rating.toString()
          }
        }}asChild>
          <Pressable>
           <Image
            source={{ uri: movie.posterURL }}
            style={{
              width: 150,
              height: 225,
              borderRadius: 8,
              marginBottom: 8
            }}
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
