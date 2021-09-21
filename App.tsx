/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   ScrollView,
   View,
   Text
 } from 'react-native';
import Image from '@src/assests/images/avatars/Allan Munger.png';
import { ImageCircle } from '@src/components/elements';
// console.log(Image)
 const App = () => {
   const [active, setActive] = React.useState(0)
   return (
     <View>
     <ImageCircle 
     uri={Image}
     active={false}
     />
     </View>
   )
 }

 export default App