import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import Colors from " @/constants/Colors";
import { Link } from "expo-router";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
    <View style={styles.searchField}>
      <Ionicons name="search-outline" style={styles.searchIcon} size={20} color={Colors.medium}/>
      <TextInput style={styles.input} placeholder="Restaurants,groceries,dishes" />
    </View>
    <Link href={"/"} asChild>
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons
          name="options-outline"
          size={20}
          color={Colors.light.text}
        ></Ionicons>
      </TouchableOpacity>
    </Link>
    </View>
  </View>
);

const CustmHeader = () => {
 const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openMoModal = ()=>{
    bottomSheetRef.current?.present()
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <BottomSheet ref={bottomSheetRef}/>
      <View style={styles.container}>
        <TouchableOpacity onPress={openMoModal}>
          <Image
            style={styles.bike}
            source={require("../assets/images/favicon.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer}>
          <Text>Delivery Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}> San Fransisco , Ca</Text>
            <Ionicons name="chevron-down" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons
            name="person-outline"
            size={20}
            color={Colors.dark.background}
          ></Ionicons>
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    padding: 10,
    borderRadius: 50,
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 20,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    borderRadius: 8,
    flexDirection:'row',
    alignItems:'center',
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  input:{
    padding:10,
    color:Colors.mediumDark,
  },
  searchIcon:{
   paddingLeft:10,

  }
});
export default CustmHeader;
