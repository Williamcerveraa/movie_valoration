import { View, ActivityIndicator, FlatList } from "react-native";
import { getLatestMovies } from "../lib/metacritic.js";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./Gamecard.jsx";
import Logo from "./Logo.jsx";
import { Screen } from "./Screen.jsx";

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
      <Screen>
        {movies.length === 0 ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <FlatList
            data={movies}
            keyExtractor={(movie) => movie.id}
            renderItem={({ item, index }) => (
              <AnimatedGameCard movie={item} index={index} />
            )}
            horizontal
          ></FlatList>
        )}
      </Screen>
    </>
  );
};

export default Main;
