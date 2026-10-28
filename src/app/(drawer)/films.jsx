import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const films = [
  {
    title: "The Pursuit of Happyness",
    genre: "Drama",
    reason:
      "I like this film because it teaches me never to give up.",
    emoji: "🎬",
  },
  {
    title: "Interstellar",
    genre: "Science Fiction",
    reason:
      "I enjoy its interesting story and amazing space scenes.",
    emoji: "🚀",
  },
  {
    title: "The Lion King",
    genre: "Animation / Adventure",
    reason:
      "I like its emotional story, music, and important life lessons.",
    emoji: "🦁",
  },
];

export default function MyTopFilms() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Top Films</Text>

      <Text style={styles.subtitle}>
        Three films I enjoy watching
      </Text>

      {films.map((film, index) => (
        <View style={styles.card} key={film.title}>
          <Text style={styles.emoji}>{film.emoji}</Text>

          <Text style={styles.title}>
            {index + 1}. {film.title}
          </Text>

          <Text style={styles.genre}>
            Genre: {film.genre}
          </Text>

          <Text style={styles.reason}>
            Why I like it: {film.reason}
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
    elevation: 2,
  },
  emoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#17324D",
    marginBottom: 8,
  },
  genre: {
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