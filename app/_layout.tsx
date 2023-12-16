
;
import CustmHeader from ' @/Components/CustmHeader';
import { Stack } from 'expo-router';




export const unstable_settings = {

  initialRouteName: 'index',
};



 export default function RootLayoutNav() {
 

  return (
  
      <Stack>
        <Stack.Screen name="index" options={{ 
          header:()=><CustmHeader/>
        }} />
      
      </Stack>

  );
}
