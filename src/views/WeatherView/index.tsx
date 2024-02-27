/**
 * Code Challenge React Native App
 * Dylan Torres
 *
 * @format
 */

import React, {useContext, useState} from 'react';
import {FlatList, Pressable, Text, View, SafeAreaView} from 'react-native';
import {t} from '@styles';
import {
  BottomSheetV1,
  EmptyMessage,
  Loading,
  SearchBar,
  TemplateWeatherInfo,
} from '@components';
import {useKeyboard} from '@hooks';
import {LocationsContext} from '@context/apiResponseContext';

function WeatherView() {
  const {locations, isSearching, locationName} = useContext(LocationsContext);
  const {Keyboard} = useKeyboard();
  const [changeBg, setChangeBg] = useState<boolean>(false);

  return (
    <View style={t.flex1}>
      <SafeAreaView style={[t.flex1]}>
        <FlatList
          automaticallyAdjustKeyboardInsets
          keyboardDismissMode="interactive"
          ListEmptyComponent={
            isSearching ? (
              <EmptyMessage value={locationName} />
            ) : (
              <View
                style={[t.h300, t.relative, t.justifyCenter, t.itemsCenter]}>
                <Loading.Screen />
                <Text
                  style={[
                    t.absolute,
                    t.bottom60,
                    t.textWeight700,
                    t.textXxl,
                    t.textGray400,
                  ]}>
                  Search for a city or airport
                </Text>
              </View>
            )
          }
          keyboardShouldPersistTaps="handled"
          onScroll={e =>
            setChangeBg(e.nativeEvent.contentOffset.y > 1 ? true : false)
          }
          stickyHeaderIndices={[0]}
          ListHeaderComponent={<SearchBar />}
          ListHeaderComponentStyle={[changeBg && t.bgPrimary]}
          data={locations}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Pressable
              style={[t.px4, t.py2]}
              onPress={() => {
                Keyboard.dismiss();
                BottomSheetV1.show({content: <TemplateWeatherInfo {...item} />});
              }}>
             <Text>
                {item.display}, {item.state}
             </Text>
            </Pressable>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

export default WeatherView;
