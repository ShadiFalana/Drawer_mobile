import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const tracks = [
  {
    title: "Imagine",
    artist: "John Lennon",
    reason:
      "I like its message of peace and hope.",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    reason:
      "I enjoy its melody and romantic lyrics.",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    reason:
      "I like its powerful rhythm and motivating message.",
  },
];

export default function MyTopMusic() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Top Music</Text>

      <Text style={styles.subtitle}>
        Three tracks I enjoy
      </Text>

      {tracks.map((track, index) => (
        <View style={styles.card} key={track.title}>
          <Text style={styles.emoji}>🎵</Text>

          <Text style={styles.title}>
            {index + 1}. {track.title}
          </Text>

          <Text style={styles.artist}>
            Artist: {track.artist}
          </Text>

          <Text style={styles.reason}>
            Why I like it: {track.reason}
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
  artist: {
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