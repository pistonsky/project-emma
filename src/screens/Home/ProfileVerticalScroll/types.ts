import React from "react"
import { ProfileData } from "@src/assests/images/types"
import { ScrollView } from "react-native"

export interface Props {
  profileData: ProfileData[]
  scrollViewRef: React.MutableRefObject<ScrollView>
  scrollViewRefHoriztontal: React.MutableRefObject<ScrollView>
}
