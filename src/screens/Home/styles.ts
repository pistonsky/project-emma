import { StyleSheet, Dimensions } from "react-native"
import CommonStyles from "@src/constants/styles"

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 0,
    backgroundColor: CommonStyles.headerDefaultColor
  },
  profileContentView: {
    flex: 1,
    backgroundColor: CommonStyles.backgroundColor
  }
})

export default styles
