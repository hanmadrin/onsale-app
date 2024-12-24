import { Stack } from "expo-router";

export default function CustomerLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Customer Home" }} />
      <Stack.Screen name="Home" options={{ title: "Customer Dashboard" }} />
      <Stack.Screen name="Search" options={{ title: "Search" }} />
      <Stack.Screen name="Profile" options={{ title: "Profile" }} />
    </Stack>
  );
}
