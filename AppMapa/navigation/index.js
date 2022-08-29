
import { NavigationContainer } from '@react-navigation/native'



import PlaceNavigator from './PlaceNavigator'

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <PlaceNavigator />
    </NavigationContainer>
  )
}

export default MainNavigation