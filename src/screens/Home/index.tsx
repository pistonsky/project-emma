import React from "react"
import { View, SafeAreaView } from "react-native"
import styles from "./styles"
import { ProfileHorizontalCarousel, Header } from "@src/components/layouts/index"
import ProfileData from "@src/assests/images/index"

const Home = () => {
  const [activeProfile, setActiveProfile] = React.useState(0)

  return (
    <>
      <SafeAreaView style={styles.container} />
      <Header title="Contacts" />
      <ProfileHorizontalCarousel
        profileData={ProfileData}
        active={activeProfile}
        setActive={setActiveProfile}
      />
    </>
  )
}

export default Home
