import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Detail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700", fontSize: 22 }}>
        Movie ID: {id}
        Movie Name: {}
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