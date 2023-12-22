import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
//process.env.EXPO_PUBLIC_GOOGLE_API_KEY
const LocationSearch = () => {
  return (
    <View style={{flex : 1}}>
      <MapView style={styles.map}></MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map:{
    flex: 1,
  }
})

export default LocationSearch