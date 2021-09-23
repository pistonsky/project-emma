import React from "react"
import { ProfileData } from "@src/assests/images/types"
import { ScrollView } from "react-native"
export interface Props {
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
  profileData: ProfileData[]
  scrollViewRef: React.MutableRefObject<ScrollView>
}
