import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SectionList,
  ListRenderItem,
  Animated,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import ParallaxScrollView from "../Components/ParallaxScrollView";
import Colors from " @/constants/Colors";
import { restaurant } from " @/assets/data/restaurant";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const Details = () => {
  const navigation = useNavigation();
  const [activeIndex,setActiveIndex] = useState(0)

  const opacity = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(()=>({
    opacity :opacity.value
  }))

  //burda dikkat et objw donfurduk ({} ypruik map ****)
  const DATA = restaurant.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

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

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <Link href={"/"} asChild>
      <TouchableOpacity style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text style={styles.dish}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishText}>${item.price}</Text>
        </View>
        <Image source={item.img} style={styles.dishImage} />
      </TouchableOpacity>
    </Link>
  );


const selectCategory = (index:number)=>{
  setActiveIndex(index)
}
const onScroll = (event:any)=>{
  const y = event.nativeEvent.contentOffset.y;
  if(y>350){
    opacity.value = 1

  }else{
    opacity.value= 0
  };
}

  return (
    <>
      <ParallaxScrollView
       scrollEvent = {onScroll}
        backgroundColor="#fff"
        parallaxHeaderHeight={300}
        renderBackground={() => (
          <Image
            source={restaurant.img}
            style={{ width: "100%", height: 290 }}
          />
        )}
        stickyHeaderHeight={120}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <View style={styles.detailsContainer}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>
            {restaurant.delivery} .{" "}
            {restaurant.tags.map(
              (tag, index) =>
                `${tag}${index < restaurant.tags.length - 1 ? "," : ""}`
            )}{" "}
          </Text>
          <Text style={styles.restaurantDescription}>{restaurant.about}</Text>
          <SectionList
            contentContainerStyle={{ paddingBottom: 40 }}
            keyExtractor={(item, index) => `${item.id + index}`}
            scrollEnabled={false}
            sections={DATA}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  paddingHorizontal: 15,
                  height: 1,
                  backgroundColor: Colors.grey,
                }}
              />
            )}
            SectionSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: Colors.grey }} />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            renderItem={renderItem}
          />
        </View>
      </ParallaxScrollView>
      <Animated.View style={[styles.stickySegments,animatedStyles]}>
        <View style={styles.segmentsShadow}>
          <ScrollView horizontal showsVerticalScrollIndicator={false} contentContainerStyle={styles.segmentScrollView}>
          {restaurant.food.map((item,index)=>(
            <TouchableOpacity key={index} style={activeIndex === index ? styles.segmentButtonActive : styles.segmentButton}onPress={()=>selectCategory(index)}>
            <Text style={activeIndex === index ? styles.segmenTextActive : styles.segmnetText}>{item.category} </Text>
            </TouchableOpacity>
          ))}
          </ScrollView>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: "#fff",
    marginLeft: 70,
    height: 100,
    justifyContent: "flex-end",
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
  stickySectionText: {
    fontSize: 20,
    margin: 10,
  },
  restaurantName: {
    fontSize: 30,
    margin: 16,
  },
  restaurantDescription: {
    fontSize: 16,
    margin: 16,
    color: Colors.medium,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 50,
    margin: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  dishImage: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  dish: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dishText: {
    fontSize: 14,
    color: Colors.mediumDark,
    paddingVertical: 4,
  },
  stickySegments:{
   position:"absolute",
   height:50,
   left:0,
   right:0,
   top:130,
   backgroundColor:"#fff",
   overflow:"hidden",


  },
  segmentsShadow:{
    justifyContent:"center",
   // paddingTop:10,
   backgroundColor:"#fff",
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:4,
    },
    shadowOpacity:0.2,
    elevation:5,
    width:"100%",
    height:"100%",
  },
  segmentButton:{
    paddingHorizontal:16,
    paddingVertical:4,
    borderRadius:50,
  },
  segmnetText:{
    color:Colors.primary,
  
    fontSize:16
  },
  segmentButtonActive:{
    backgroundColor:Colors.primary,
    paddingHorizontal:16,
    paddingVertical:4,
    borderRadius:50,


  },
  segmenTextActive:{
    color:"#fff",
    fontWeight:'bold',
    fontSize:16,
  },
  segmentScrollView:{
    paddingHorizontal:16,
    alignItems:"center",
    gap:20,
    paddingBottom:4,
  }

});
export default Details;
