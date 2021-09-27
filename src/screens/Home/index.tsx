import React from "react"
import { View, SafeAreaView, ScrollView, Dimensions } from "react-native"
import styles from "./styles"
import { Header } from "@src/components/layouts"
import { ProfileHorizontalScroll, ProfileVerticalScroll } from "@src/components/sections/"
import { HomeContext } from "@src/reducers"
import ProfileData from "@src/assests/images"

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
      <HomeContext.Provider value={{ theme, setTheme }}>
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
      </HomeContext.Provider>
    </>
  )
}

export default Home
