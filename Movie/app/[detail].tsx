import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
const { Image } = require("react-native");

const Detail = () => {
    const params = useLocalSearchParams<{
        title?: string;
        poster?: string;
        overview?: string;
    }>();

    // decode in case you pass values via URL encoding
    const title = params.title ? decodeURIComponent(params.title) : "Unknown title";
    const poster = params.poster ? decodeURIComponent(params.poster) : undefined;
    const overview = params.overview ? decodeURIComponent(params.overview) : "No overview available";


    return (
        <View style={styles.container}>
            {poster ? (
                <Image
                    source={{ uri: poster }}
                    style={{ width: 200, height: 300, marginBottom: 12, borderRadius: 8 }}
                    resizeMode="cover"
                />
            ) : null}
            <Text style={{ fontWeight: "700", fontSize: 18, marginBottom: 6 }}>{title}</Text>
            <Text style={{ textAlign: "center", paddingHorizontal: 12 }}>{overview}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Detail;