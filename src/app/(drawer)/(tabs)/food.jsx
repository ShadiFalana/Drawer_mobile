import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

const foodPlaces = [
  {
    id: "1",
    name: "Sunrise Cafe",
    city: "Jerusalem",
    type: "Coffee & Desserts",
    rating: "5",
  },
  {
    id: "2",
    name: "Pizza House",
    city: "Ramallah",
    type: "Pizza & Italian Food",
    rating: "4",
  },
  {
    id: "3",
    name: "Sweet Corner",
    city: "Bethlehem",
    type: "Cakes & Desserts",
    rating: "4",
  },
];

export default function MyFood() {
  function openDetails(place) {
    router.push({
      pathname: "/details",
      params: {
        name: place.name,
        city: place.city,
        type: place.type,
        rating: place.rating,
      },
    });
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Food & Coffee</Text>

      <Text style={styles.subtitle}>
        My favorite places for food and drinks
      </Text>

      {foodPlaces.map((place) => (
        <View style={styles.card} key={place.id}>
          <Text style={styles.emoji}>☕</Text>

          <Text style={styles.name}>
            {place.name}
          </Text>

          <Text style={styles.info}>
            City: {place.city}
          </Text>

          <Text style={styles.info}>
            Type: {place.type}
          </Text>

          <Text style={styles.rating}>
            {"★".repeat(Number(place.rating))}
            {"☆".repeat(5 - Number(place.rating))}
            {"  "}
            {place.rating}/5
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => openDetails(place)}
          >
            <Text style={styles.buttonText}>
              View Details
            </Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FA",
    padding: 16,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#17324D",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 18,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 16,
    borderRadius: 14,
    elevation: 3,
  },
  emoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#17324D",
    marginBottom: 10,
  },
  info: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 7,
  },
  rating: {
    fontSize: 19,
    color: "#E6A817",
    marginTop: 5,
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#17324D",
    padding: 13,
    borderRadius: 9,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});