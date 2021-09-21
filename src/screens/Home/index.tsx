import React from "react"
import { View, SafeAreaView } from "react-native"
import styles from "./styles"
import { ProfileHorizontalCarousel } from "@src/components/layouts/index"
import ProfileData from "@src/assests/images/index"

const Home = () => {
  const [activeProfile, setActiveProfile] = React.useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHorizontalCarousel
        profileData={ProfileData}
        active={activeProfile}
        setActive={setActiveProfile}
      />
    </SafeAreaView>
  )
}

export default Home
