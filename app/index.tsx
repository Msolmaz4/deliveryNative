import Categories from ' @/Components/Categories';
import Restaurants from ' @/Components/Restaurants';
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
    <ScrollView style={styles.scrollView}>
      <Categories/>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
        <Restaurants/>
        <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</Text>
        <Restaurants/>
    </ScrollView>
  </SafeAreaView>
  );
};


  const styles = StyleSheet.create({
    container: {
      top: 100,
      backgroundColor:"#fff",
      height:160
      
    },
    scrollView: {
      backgroundColor: 'red',
      marginHorizontal: 10,
      
    },
    text: {
      fontSize: 42,
    },
  });

export default Page;