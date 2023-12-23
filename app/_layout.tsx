import CustmHeader from " @/Components/CustmHeader";
import { Stack, useNavigation } from "expo-router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import BottomSheet from " @/Components/BottomSheet";
import Colors from " @/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustmHeader />,
          }}
        />
        {/* options={{presentation:'modal'}}  arka rakaya acilmasini sagilyor sayafani */}
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: "modal",
            headerTitle: "Filter",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons
                  name="close-outline"
                  size={28}
                  color={Colors.primary}
                ></Ionicons>
              </TouchableOpacity>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="(modal)/location-search"
          options={{
            presentation: "fullScreenModal",
            headerTitle: "Select Loaction",

            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Ionicons
                  name="close-outline"
                  size={28}
                  color={Colors.primary}
                ></Ionicons>
              </TouchableOpacity>
            ),
          }}
        ></Stack.Screen>
      </Stack>
    </BottomSheetModalProvider>
  );
}
