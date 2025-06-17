import { View, Text } from "react-native";

export function Score({ vote_average, maxScore }) {
  const getColor = () => {
    const percentage = (vote_average / maxScore) * 100;
    if (percentage < 40) return "bg-red-500";
    if (percentage < 98) return "bg-yellow-500";
    return "bg-green-500";
  };

  const className = getColor();

  return (
    <View
      className={`${className} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{vote_average}</Text>
    </View>
  );
}