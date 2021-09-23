import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: width * 0.5 - width * 0.1,
    height: 100,
    marginTop: 20
  },
  imageCircle: {
    width: width * 0.2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
})

export default styles
