import React from "react"
import { View, SafeAreaView } from "react-native"
import styles from "./styles"
import { ProfileHorizontalScroll, Header } from "@src/components/layouts/index"
import ProfileData from "@src/assests/images/index"

const Home = () => {
  const [activeProfile, setActiveProfile] = React.useState(0)

  return (
    <>
      <SafeAreaView style={styles.safeAreaContainer} />
      <Header title="Contacts" />
      <View style={styles.profileContentView}>
        <ProfileHorizontalScroll
          profileData={ProfileData}
          active={activeProfile}
          setActive={setActiveProfile}
        />
      </View>
    </>
  )
}

export default Home
