import React from "react"
import { View, Text } from "react-native"
import { Props } from "./types"
import styles from "./styles"
const Header = ({ title }: Props) => {
  return (
    <View style={styles.parentView}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header
