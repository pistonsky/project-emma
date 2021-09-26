import { StyleSheet, Dimensions } from "react-native"
import CommonStyles from "@src/styles"
const { width } = Dimensions.get("window")

export default StyleSheet.create({
  scrollView: {},
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: width,
    paddingHorizontal: width * 0.05
  },
  profileName: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5
  },
  profileHeadingView: {
    marginVertical: 20,
    alignItems: "center",
    width: "100%"
  },
  textHeadingFirstName: {
    fontSize: CommonStyles.secondaryHeading,
    fontWeight: "bold"
  },
  textHeadingLastName: {
    fontSize: CommonStyles.secondaryHeading,
    fontWeight: CommonStyles.fontLight
  },
  textSubHeading: {
    fontSize: CommonStyles.fontSize,
    fontWeight: CommonStyles.fontLight
  },
  aboutMeHeading: {
    marginBottom: 5,
    fontSize: CommonStyles.fontSize,
    fontWeight: "bold"
  },
  aboutInfo: {
    fontSize: CommonStyles.fontSize,
    fontWeight: CommonStyles.fontLight
  }
})
