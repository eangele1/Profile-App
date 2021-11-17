import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from "../GeneralStyles";

const DetailsScreen = ({ route, navigation }) => {
  const { name, image, bio } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#151515",
      }}
    >
      <Image
        source={image}
        style={{
          height: 150,
          borderRadius: 15,
          width: 150,
          resizeMode: "contain",
        }}
      ></Image>
      <Text style={styles.h1}>{name}</Text>
      <Text style={styles.h3}>{bio}</Text>
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.goBack()}
      >
        <Text>Return To Profiles</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
