import React, { useEffect } from "react"
import { View, SafeAreaView, ScrollView, Dimensions } from "react-native"
import styles from "./styles"
import { Header } from "@src/components/layouts"
import ProfileHorizontalScroll from "./ProfileHorizontalScroll"
import ProfileVerticalScroll from "./ProfileVerticalScroll"
import ProfileData from "@src/assests/images"

export const ThemeContext = React.createContext(null)

const Home = () => {
  const { width } = Dimensions.get("window")
  const [theme, setTheme] = React.useState({
    active: 0,
    heightOfScrollView: 0,
    profileWidth: width * 0.2,
    scrolledByTouchingProfile: false
  })
  const horizontalScrollRef = React.useRef<ScrollView>()
  const verticalScrollRef = React.useRef<ScrollView>()

  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer} />
      <Header title="Contacts" />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <View style={styles.profileContentView}>
          <ProfileHorizontalScroll
            profileData={ProfileData}
            scrollViewRef={horizontalScrollRef}
            scrollViewRefVertical={verticalScrollRef}
          />
          <ProfileVerticalScroll
            profileData={ProfileData}
            scrollViewRef={verticalScrollRef}
            scrollViewRefHoriztontal={horizontalScrollRef}
          />
        </View>
      </ThemeContext.Provider>
    </>
  )
}

export default Home
