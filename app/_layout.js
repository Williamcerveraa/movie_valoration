import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import Logo from "../components/Logo"
import { UserIcon } from "../components/Icons";


export default function Layout() {
  return (
    <View className="flex-1 bg-white">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                <UserIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}