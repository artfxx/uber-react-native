import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import NavFavorites from '../components/NavFavorites'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'

const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{ uri: 'https://links.papareact.com/gzs' }}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />

        <TouchableOpacity
          style={tw`bg-black py-3 m-2 w-2/5`}
          onPress={() => {
            dispatch(
              setOrigin({
                location: {
                  lat: 51.5078788,
                  lng: -0.08773210000000001,
                },
                description: 'London',
              })
            )

            dispatch(setDestination(null))
          }}
        >
          <Text style={tw`text-center text-white text-xl`}>Start</Text>
        </TouchableOpacity>

        <NavOptions />

        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
