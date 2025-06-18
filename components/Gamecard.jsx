import { useEffect, useRef } from "react";
import { Image, Text, View, StyleSheet, Animated, Pressable,} from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function Gamecard({ movie }) {
  return (
   <Link href={`/${movie.id}`} asChild>
   <StyledPressable className="mb-2 m-2">
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
      {/* <View className="flex-shrink">
        <Text className = "mb-1" style={styles.title}>{movie.title}</Text>
        <Text className = "mt-2 flex-shrink" style={styles.overview}>{movie.overview.slice(0,150)}...</Text>
      </View> */}
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
  card: {
    marginBottom: 42,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    height: 220,
    width: 150,
    borderRadius: 10,
  },
  overview: {
    color: "white",
    fontSize: 18,
  },
});
