


import CustmHeader from ' @/Components/CustmHeader';
import { Stack } from 'expo-router';
import {

  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';




export const unstable_settings = {

  initialRouteName: 'index',
};



 export default function RootLayoutNav() {
 

  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ 
          header:()=><CustmHeader/>
        }} />
       
      
      </Stack>
      </BottomSheetModalProvider>
  );
}
