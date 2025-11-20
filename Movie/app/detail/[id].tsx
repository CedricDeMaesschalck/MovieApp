import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Detail = () => {
  const { rating, title, posterURL } = useLocalSearchParams<{ rating: string; title: string; posterURL: string }>();

  return (
    <View style={styles.container}>
      <Image source={{ uri: posterURL }} style={{ width: 200, height: 300, marginTop: 20 }} />
      <Text style={{ fontWeight: "700", fontSize: 22 }}>
        {title} - {rating}⭐
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Detail;