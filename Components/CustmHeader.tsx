import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Colors from " @/constants/Colors";




const SearchBar =()=>(
    <View style={styles.searchContainer}>
        <Text>der</Text>
    </View>
)




const CustmHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <View style={styles.container}>
        <TouchableOpacity>
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
      <SearchBar/>
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
  locationName:{
    flexDirection:'row',
    alignItems:'center'
  },
  searchContainer:{
    height: 60,
    backgroundColor: "red",
  }
});
export default CustmHeader;
