import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
]

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [select, setSelect] = useState(null)

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
          onPress={() => navigation.navigate('NavigateCard')}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelect(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === select?.id && 'bg-gray-200'
            }`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-bold`}>{item.title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text style={tw`text-xl`}>$99</Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 ${!select && 'bg-gray-300'}`}
          disabled={!select}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {select?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
