import { useEffect, useRef } from "react";
import { Image, Text, View, StyleSheet, Animated, Pressable,} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function Gamecard({ movie }) {
  return (
   <Link href={`/${movie.id}`} asChild>
   <StyledPressable>
     <View
      className="flex-row gap-4"
      key={movie.id}
    >
      <Image
        source={{
          uri: movie.image,
        }}
        style={styles.image}
      />
      <View className="flex-shrink">
        <Text className = "mb-1" style={styles.title}>{movie.title}</Text>
        <Score vote_average={movie.vote_average} maxScore={100}></Score>
        <Text className = "mt-2 flex-shrink-0" style={styles.overview}>{movie.overview.slice(0,150)}...</Text>
      </View>
    </View>
   </StyledPressable>
   
   
   </Link>
  );
}

export function AnimatedGameCard({ movie, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <Gamecard movie={movie} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  card: {
    marginBottom: 42,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    height: 167,
    width: 147,
    resizeMode: "contain",
    borderRadius: 10,
  },
  overview: {
    color: "white",
    fontSize: 18,
  },
});
