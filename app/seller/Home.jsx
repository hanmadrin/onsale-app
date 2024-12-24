import { StatusBar } from 'expo-status-bar';
import ScreenWrapper from '@/components/ScreenWrapper';
import { View, Text } from 'react-native'
import  Loading  from '@/components/Loading';
import React from 'react'

const Search = () => {
  return (
    <ScreenWrapper bg={"white"}>
            <StatusBar style="dark" />
        <View>
        <Text>seller home</Text>
        </View>
        <Loading />
    </ScreenWrapper>

  )
}

export default Search