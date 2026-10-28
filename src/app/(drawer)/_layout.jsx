import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: "#17324D",
        },
        headerTintColor: "#FFFFFF",
        drawerActiveTintColor: "#17324D",
        drawerActiveBackgroundColor: "#DCEAF5",
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "600",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Explore My Places",
          drawerLabel: "Explore My Places",
        }}
      />

      <Drawer.Screen
        name="films"
        options={{
          title: "My Top Films",
          drawerLabel: "My Top Films",
        }}
      />

      <Drawer.Screen
        name="music"
        options={{
          title: "My Top Music",
          drawerLabel: "My Top Music",
        }}
      />
    </Drawer>
  );
}