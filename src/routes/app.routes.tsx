import {createNativeStackNavigator} from '@react-navigation/native-stack'

const {Navigator, Screen} = createNativeStackNavigator()

import { Home } from '../components/screens/Home'
import {New} from '../components/screens/New'
import { Habit } from '../components/screens/Habbit'

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Home" component={Home}/>
            <Screen name="New" component={New}/>
            <Screen name="Habbit" component={Habit}/>
        </Navigator>
    )
}