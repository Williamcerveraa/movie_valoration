import { View, ActivityIndicator, FlatList } from "react-native";
import { getLatestMovies } from "../lib/metacritic.js";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./Gamecard.jsx";
import Logo from "./Logo.jsx";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestMovies().then((data) => {
      setMovies(data);
    });
  }, []);

  return (
    <>
      <View
        className="bg-black"
        style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      >
        {movies.length === 0 ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={movies}
            keyExtractor={(movie) => movie.id}
            renderItem={({ item, index }) => (
              <AnimatedGameCard movie={item} index={index} />
            )}
          ></FlatList>
        )}
      </View>
    </>
  );
};

export default Main;
