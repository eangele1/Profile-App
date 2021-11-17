import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#151515",
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
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "notoserif",
    color: "white",
    textAlign: "center",
  },
  h3: {
    fontSize: 15,
    fontWeight: "100",
    fontFamily: "monospace",
    color: "white",
    marginBottom: 10,
  },
  returnButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    color: "black",
    borderRadius: 10,
  },
});

export default styles;
