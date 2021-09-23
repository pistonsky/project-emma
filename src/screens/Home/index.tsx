import React from "react"
import { View, SafeAreaView, ScrollView } from "react-native"
import styles from "./styles"
import { Header, ProfileHorizontalScroll } from "@src/components/layouts"
import ProfileData from "@src/assests/images"

const Home = () => {
  const [activeProfile, setActiveProfile] = React.useState(0)
  const horizontalScrollRef = React.useRef<ScrollView>()
  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer} />
      <Header title="Contacts" />
      <View style={styles.profileContentView}>
        <ProfileHorizontalScroll
          profileData={ProfileData}
          active={activeProfile}
          setActive={setActiveProfile}
          scrollViewRef={horizontalScrollRef}
        />
      </View>
    </>
  )
}

export default Home
