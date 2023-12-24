import { View, Text } from 'react-native'
import React from 'react'
import ParallaxScrollView from "../Components/ParallaxScrollView"

const Details = () => {
  return (
    <>
     <ParallaxScrollView
      backgroundColor="blue"
      contentBackgroundColor="pink"
      parallaxHeaderHeight={300}
 
    
      renderForeground={() => (
       <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hello World!</Text>
        </View>
      )}>
      <View style={{ height: 500 }}>
        <Text>Scroll me</Text>
      </View>
    </ParallaxScrollView>
    
    </>
  )
}

export default Details