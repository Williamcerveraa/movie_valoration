import { useEffect, useRef } from "react";
import { Image, Text, View, StyleSheet, Animated } from "react-native";

export function Gamecard ({ movie }) {
  return (
    <View key={movie.id} style={styles.card}>
      <Image
        source={{
          uri: movie.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
};

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

