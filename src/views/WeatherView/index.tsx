/**
 * Code Challenge React Native App
 * Dylan Torres
 *
 * @format
 */

import React, {useState} from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import {t} from '@styles';
import {BottomSheetV1,SearchBar, TemplateWeatherInfo} from '@components';
import location from './location.json';
import { useKeyboard } from '@hooks';


function WeatherView(){
  const {Keyboard} = useKeyboard()
  const [changeBg, setChangeBg] = useState<boolean>(false);

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={[t.flex1]}>
        <FlatList
          keyboardShouldPersistTaps='handled'
          onScroll={e =>
            setChangeBg(e.nativeEvent.contentOffset.y > 1 ? true : false)
          }
          stickyHeaderIndices={[0]}
          ListHeaderComponent={<SearchBar />}
          ListHeaderComponentStyle={[changeBg && t.bgPrimary]}
          data={location}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Pressable style={[t.px4, t.py2]} onPress={() => {
              Keyboard.dismiss()
              BottomSheetV1.show({content:<TemplateWeatherInfo/>})
              }}>
              <Text>{item.display}</Text>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

export default WeatherView;