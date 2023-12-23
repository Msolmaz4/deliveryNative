import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { categories } from ' @/assets/data/home'


const Categories = () => {
  return (
    <ScrollView horizontal>
     {
      categories?.map((item,index)=>(
        <View style={styles.categoryCard} key={index}>
          <Image source={item.img}/>

        </View>
      ))
     }
     
    </ScrollView>
    
  )
}
const styles = StyleSheet.create({
  categoryCard :{
    width:100,
    height:100,
  }
 
});
export default Categories