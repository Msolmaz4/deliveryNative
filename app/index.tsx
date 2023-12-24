import Categories from ' @/Components/Categories';
import Restaurants from ' @/Components/Restaurants';
import Colors from ' @/constants/Colors';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const Page = () => {
  return (
    
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView} contentContainerStyle={{paddingBottom:40}}>
      <Categories/>
      <Text style={styles.text}>
        To picks inyour neigbourhood</Text>
        <Restaurants/>
        <Text style={styles.text}>
        offer near you</Text>
        <Restaurants/>
    </ScrollView>
  </SafeAreaView>
  );
};


  const styles = StyleSheet.create({
    container: {
      top: 100,
      backgroundColor:Colors.lightGrey,
      flex:1
      
    },
    scrollView: {
    
      marginHorizontal: 10,
      
    },
    text: {
      fontSize: 18,
      fontWeight:'bold',
      marginTop:16,
      marginBottom:8,
      paddingHorizontal:16,

    },
  });

export default Page;