import * as React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import styles from "../GeneralStyles";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const pushToDetails = (name, image, bio) => {
    navigation.navigate("Details", {
      name: name,
      image: image,
      bio: bio,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Box 1 */}
        <View style={{ justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() =>
              pushToDetails(
                "Anthony",
                require("../images/Anthony.jpg"),
                "This is something about me."
              )
            }
            activeOpacity={0.75}
          >
            <Image
              resizeMode="contain"
              source={require("../images/Anthony.jpg")}
              style={styles.ImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              pushToDetails(
                "Beakal",
                require("../images/Beakal.jpg"),
                "This is something about me."
              )
            }
            activeOpacity={0.75}
          >
            <Image
              resizeMode="contain"
              source={require("../images/Beakal.jpg")}
              style={styles.ImageIconStyle}
            />
          </TouchableOpacity>
        </View>
        {/* Box 2 */}
        <View style={{ justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() =>
              pushToDetails(
                "Yiley",
                require("../images/Yiley.jpg"),
                "This is something about me."
              )
            }
            activeOpacity={0.75}
          >
            <Image
              resizeMode="contain"
              source={require("../images/Yiley.jpg")}
              style={styles.ImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              pushToDetails(
                "Ezer",
                require("../images/Ezer.jpg"),
                "This is something about me."
              )
            }
            activeOpacity={0.75}
          >
            <Image
              resizeMode="contain"
              source={require("../images/Ezer.jpg")}
              style={styles.ImageIconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
