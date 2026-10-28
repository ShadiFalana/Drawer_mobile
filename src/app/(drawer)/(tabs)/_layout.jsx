import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#17324D",
        },
        headerTintColor: "#FFFFFF",
        tabBarActiveTintColor: "#17324D",
        tabBarInactiveTintColor: "#888888",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarStyle: {
          height: 62,
          paddingBottom: 8,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "My Places",
          tabBarLabel: "My Places",
        }}
      />

      <Tabs.Screen
        name="food"
        options={{
          title: "My Food & Coffee",
          tabBarLabel: "Food & Coffee",
        }}
      />
    </Tabs>
  );
}