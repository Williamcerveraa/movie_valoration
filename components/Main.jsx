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

  //EL COMPONENTE SafeAreaView solo sirve para dispositivos IOS
  // para que el contenido no se superponga con la barra de estado
  // Con Constants puedes saber varias cosas del dispositivo, las fuentes, etc.
  // FlatList se utiliza para listas de datos, en cuestión de optimización
  // ScrollView es para listas pequeñas, debido a que renderiza todo el contenido en primera instancia
  return (
    <>
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View style={{ marginBottom: 20 }}>
          <Logo></Logo>
        </View>
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
