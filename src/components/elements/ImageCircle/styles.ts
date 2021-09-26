import { StyleSheet } from "react-native"
import CommonStyles from "@src/styles"
export default StyleSheet.create({
  parentView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    borderWidth: 5,
    borderColor: CommonStyles.activeRadiusColor
  }
})
