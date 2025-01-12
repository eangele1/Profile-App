import * as React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "../GeneralStyles";
import DATA from "../utils/data";

const HomeScreen = ({ navigation }) => {
  const renderIconButton = (DATA) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.setOptions({ title: "Biography" });
          navigation.navigate("Details", {
            name: DATA.name,
            image: DATA.image,
            bio: DATA.bio,
          });
        }}
        activeOpacity={0.75}
      >
        <Image
          resizeMode="contain"
          source={DATA.image}
          style={styles.ImageIconStyle}
        />
        <Text style={styles.h1}>{DATA.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Box 1 */}
        <View style={{ justifyContent: "space-between" }}>
          {renderIconButton(DATA[0])}
          {renderIconButton(DATA[1])}
        </View>
        {/* Box 2 */}
        <View style={{ justifyContent: "space-between" }}>
          {renderIconButton(DATA[2])}
          {renderIconButton(DATA[3])}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
