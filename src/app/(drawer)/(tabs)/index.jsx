import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const places = [
  {
    name: "Al-Aqsa Mosque",
    location: "Jerusalem",
    reason:
      "I like this place because of its religious importance and peaceful atmosphere.",
    emoji: "🕌",
  },
  {
    name: "Old City",
    location: "Jerusalem",
    reason:
      "I enjoy its historic streets, traditional markets, and beautiful architecture.",
    emoji: "🏛️",
  },
  {
    name: "The Dead Sea",
    location: "Palestine / Jordan region",
    reason:
      "I like the natural scenery and the unique experience of visiting this place.",
    emoji: "🌊",
  },
];

export default function MyPlaces() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Favorite Places</Text>

      <Text style={styles.subtitle}>
        Places I enjoy visiting
      </Text>

      {places.map((place, index) => (
        <View style={styles.card} key={place.name}>
          <Text style={styles.emoji}>{place.emoji}</Text>

          <Text style={styles.name}>
            {index + 1}. {place.name}
          </Text>

          <Text style={styles.location}>
            Location: {place.location}
          </Text>

          <Text style={styles.reason}>
            {place.reason}
          </Text>
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
    fontSize: 26,
    fontWeight: "bold",
    color: "#17324D",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 18,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 14,
    borderRadius: 14,
    borderLeftWidth: 5,
    borderLeftColor: "#3976A8",
    elevation: 2,
  },
  emoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  name: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#17324D",
    marginBottom: 8,
  },
  location: {
    fontSize: 14,
    color: "#3976A8",
    marginBottom: 8,
  },
  reason: {
    fontSize: 15,
    lineHeight: 23,
    color: "#374151",
  },
});