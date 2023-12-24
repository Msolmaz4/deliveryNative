import { View, Text, StyleSheet, Image, TouchableOpacity, SectionList } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "../Components/ParallaxScrollView";
import Colors from " @/constants/Colors";
import { restaurant } from " @/assets/data/restaurant";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
  const navigation = useNavigation();
   
//burda dikkat et objw donfurduk ({} ypruik map ****)
  const DATA = restaurant.food.map((item,index)=>({
  
    title:item.category,
    data:item.meals,
    index,
   
  }))



  useLayoutEffect(() => {
    console.log("first");
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={32}
            color={Colors.primary}
            style={styles.icox}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity>
            <Ionicons
              name="share-outline"
              size={32}
              color={Colors.primary}
              style={styles.icox}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="search-outline"
              size={28}
              color={Colors.primary}
              style={styles.icox}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <>
      <ParallaxScrollView
        backgroundColor="#fff"
        parallaxHeaderHeight={300}
        renderBackground={() => <Image source={restaurant.img}  style={{width:"100%",height:290}}/>}
        stickyHeaderHeight={120}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}>
        <View style={styles.detailsContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>{restaurant.delivery} . {restaurant.tags.map((tag,index)=>`${tag}${index<restaurant.tags.length -1 ? ",": ""}`)} </Text>
          <Text style={styles.restaurantDescription}>{restaurant.about}</Text>
          <SectionList sections={DATA} renderItem={({item})=>(
             <Text>{item.name}</Text>
          )
           
          }/>
        </View>
      </ParallaxScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: "#fff",
    marginLeft:70,
    height:100,
    justifyContent:"flex-end",
  },
  icox: {
    marginTop: 50,
    marginLeft: 15,
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  stickySectionText:{
    fontSize:20,
    margin:10,
  },
  restaurantName:{
    fontSize:30,
    margin:16,


  },
  restaurantDescription:{
    fontSize:16,
    margin:16,
    color:Colors.medium
    
  },
  
});
export default Details;
