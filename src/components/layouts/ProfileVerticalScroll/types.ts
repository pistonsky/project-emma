import React from "react"
import { ProfileData } from "@src/assests/images/types"

export interface Props {
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
  profileData: ProfileData[]
}
