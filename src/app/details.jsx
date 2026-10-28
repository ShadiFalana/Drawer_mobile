import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function Details() {
  const {
    name,
    city,
    type,
    rating,
    description,
  } = useLocalSearchParams();

  const numericRating = Math.max(
    0,
    Math.min(5, Number(rating) || 0)
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Place Details</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>
          {name || "Unknown"}
        </Text>

        <Text style={styles.label}>City</Text>
        <Text style={styles.value}>
          {city || "Unknown"}
        </Text>

        <Text style={styles.label}>Type</Text>
        <Text style={styles.value}>
          {type || "Not specified"}
        </Text>

        <Text style={styles.label}>Rating</Text>
        <Text style={styles.rating}>
          {"★".repeat(numericRating)}
          {"☆".repeat(5 - numericRating)}
        </Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>
          {description || "No description available."}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/(drawer)/(tabs)")}
        >
          <Text style={styles.buttonText}>
            Back to My Places
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F6",
  },
  card: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#176B5B",
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#176B5B",
    marginTop: 12,
    marginBottom: 5,
  },
  value: {
    fontSize: 17,
    color: "#333333",
  },
  rating: {
    fontSize: 23,
    color: "#E6A817",
  },
  description: {
    fontSize: 16,
    lineHeight: 23,
    color: "#555555",
  },
  button: {
    backgroundColor: "#176B5B",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});