import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { categories } from " @/assets/data/home";

const Categories = () => {
  return (
    <ScrollView horizontal showsVerticalScrollIndicator={false}>
      {categories?.map((item, index) => (
        <View style={styles.categoryCard} key={index}>
          <Image source={item.img} style={styles.imga} />
          <Text style={styles.categoryText}>{item.text} </Text>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
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
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    alignItems: "center",
    display:"flex"
  },
  imga:{
    width:80
  }
});
export default Categories;
