import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from "../GeneralStyles";

const DetailsScreen = ({ route, navigation }) => {
  const { name, image, bio } = route.params;

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default DetailsScreen;
