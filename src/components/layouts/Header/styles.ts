import { StyleSheet, Dimensions } from "react-native"
import CommonStyles from "@src/constants/styles"

const width = Dimensions.get("window").width

export default StyleSheet.create({
  parentView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: CommonStyles.headerDefaultColor,
    height: 50,
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: CommonStyles.borderBottomColor
  },
  text: {
    fontWeight: "bold",
    fontSize: CommonStyles.secondaryHeading
  }
})
