
import { Link } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { movie_id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (movie_id) {
      getMovieDetails(movie_id).then(setGameInfo);
    }
  }, [movie_id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: "",
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.image }}
                style={{ width: 214, height: 294 }}
              />
              {/* <Score score={gameInfo.vote_average} maxScore={100} /> */}
              <Text className="text-white text-center font-bold text-xl">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 text-left mb-8 text-base">
                {gameInfo.overview}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
