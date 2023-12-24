import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { restaurants } from " @/assets/data/home";
import { Link } from "expo-router";

const Restaurants = () => {
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false}>
      {restaurants?.map((item, index) => (
     
         <Link href={'/details'} key={index} asChild> 
        <TouchableOpacity>
          <View style={styles.categoryCard} key={index}>
            <Image source={item.img} style={styles.image} />
            {/* Bu durumda width: undefined ve height: undefined kullanımı, görüntünün orijinal boyutlarını koruma amacını taşır. Yani, görüntünün genişliği ve yüksekliği orijinal boyutlarına göre ayarlanır. Bu, genellikle bir Image bileşeni içinde görüntüyü ölçeklendirirken, orijinal oranlarına sadık kalmak istediğinizde kullanışlıdır. */}
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}> {item.name}</Text>
              <Text style={styles.rating}> {item.rating}</Text>
              <Text style={styles.rating}> {item.distance}</Text>

            </View>
          </View>
        </TouchableOpacity>
         </Link>
        
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    width: 300,
    height: 250,
    backgroundColor: "#fff",
    marginEnd: 10,
    // marginEnd stil özelliği, React Native'de genellikle bir bileşenin belirtilen kenarındaki iç boşluğu (margin) ayarlamak için kullanılır. marginEnd, genellikle sağ kenar için belirtilen iç boşluğu ifade eder.
    elevation: 2,
    // elevation özelliği, genellikle kutu modeli içindeki bir bileşenin yüksekliği üzerinde bir gölge oluşturarak gerçekleştirilir. Bu gölge, kullanıcının bileşenin diğer öğelerden daha yüksek olduğunu algılamasına yardımcı olabilir.
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.006,
    borderRadius: 4,
  },
  categoryText: {
    paddingVertical: 6,
    fontSize: 12,
    fontWeight: "bold",
    alignItems: "center",
  },
  image:{
    flex:1,
    width:undefined,
    height:undefined,
  },
  imageContainer:{

  },
  categoryBox:{
flex:1,
  },
  rating:{

  }
});
export default Restaurants;