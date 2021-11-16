import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "darkgray",
  },
  contentContainer: {
    width: width * 0.75,
    height: width * 0.75,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  ImageIconStyle: {
    width: (width * 0.75) / 2.5,
    height: (width * 0.75) / 2.5,
    borderRadius: 10,
  },
  h1: {
    fontSize: 25,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 15,
    fontWeight: "100",
  },
});

export default styles;
