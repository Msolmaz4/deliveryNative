import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import useBasketStore from " @/basketStore";
import Colors from " @/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import ConfettiCannon from 'react-native-confetti-cannon'
import { Link } from "expo-router";
import SwipeableRow from " @/Components/SwipeableRow";

const Basket = () => {
  const { products, total, clearCart, reduceProduct } = useBasketStore();
  const [order, setOrder] = useState(false);

  const FEES = {
     service:2.99,
     delivery:5.99,
  }

  const startCheckkoput =()=>{
   setOrder(true)
   clearCart()
  }
  return (
    <>
      {order && <ConfettiCannon count={200} origin={{x:-10,y:0}} fallSpeed={2500} fadeOut={true} autoStart={true}/>}
      {order && (
        <View style ={{marginTop:"50%",padding:20,alignItems:"center"}}>
            <Text style={{fontSize:24,fontWeight:"bold",textAlign:"center"}}>Thank zou Bruder</Text>
            <Link href={'/'} asChild>
                <TouchableOpacity  style={styles.orderBtn}>
                    <Text style={styles.footerText}> New Order</Text>
                </TouchableOpacity>

            </Link>

        </View>
      )}
      {!order && (
        <>
          <FlatList
            data={products}
            ListHeaderComponent={<Text style={styles.section}>Items</Text>}
            ItemSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: Colors.grey }} />
            )}
            renderItem={({ item }) => (
                <SwipeableRow onDelete={()=>reduceProduct(item)}>
              <View style={styles.row}>
                <Text style={{ fontSize: 18 }}>{item.quantity}x</Text>
                <Text style={{ flex: 1, fontSize: 18 }}>{item.name}</Text>
                <Text style={{ fontSize: 18 }}>
                  ${item.price * item.quantity}
                </Text>
              </View></SwipeableRow>
            )}
            ListFooterComponent={
                <View>
                    <View style={{height:1,backgroundColor:Colors.grey}}></View>
                    <View style={styles.totalRow}>
                        <Text>Subtotal</Text>
                        <Text>${total}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text>Service Fee</Text>
                        <Text>${FEES.service}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text>Delivery</Text>
                        <Text>${FEES.delivery}</Text>
                    </View>
                    <View style={styles.totalRow}>
                        <Text>Order Total</Text>
                        <Text style={{fontWeight:"bold"}}>${(FEES.delivery + total +FEES.service).toFixed(2)}</Text>
                    </View>
                </View>
            }
          />
          
<View style={styles.footer}>
  <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "#fff" }}>
    <TouchableOpacity style={styles.fullButton} onPress={startCheckkoput}>
        <Text style={styles.footerText}>Order Now</Text>

    </TouchableOpacity>

  </SafeAreaView>
        </View>
      
        </>
      )}
        
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    gap: 20,
  },
  section: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
    paddingHorizontal: 10,
  },
  totalRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    backgroundColor:"#fff",


  },
  footer: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 10,
    elevation: 10,
    schadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 20,
  },
  fullButton: {
    backgroundColor: Colors.primary,
    paddingRight: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent:"center",
    flex: 1,
   
    height: 50,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orderBtn:{
    backgroundColor:Colors.primary,
    paddingHorizontal:16,
    borderRadius:8,
    alignItems:"center",
    width:250,
    height:50,
    justifyContent:"center",
    marginTop:20,
  }
  
});
export default Basket;
