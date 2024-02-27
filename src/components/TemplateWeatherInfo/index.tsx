import {constants, t} from '@styles';
import {Image, Text, View} from 'react-native';
import Icon from '../Icon';
import {convertDate} from '@utils/convertDate';
import {useEffect, useState} from 'react';
import {fetchWeather} from '@api/endpoints';
import Loading from '../Loading';
import BottomSheetV1 from '../BottomSheetV1';

interface TemplateWeatherInfoProps {
  [key: string]: string | number;
}

function TemplateWeatherInfo({
  lat,
  long,
  display,
  ...props
}: TemplateWeatherInfoProps) {
  const [weatherData, setWeatherData] = useState<Object>({});
  const [isload, setLoad] = useState<boolean>(true);
  useEffect(() => {
    setLoad(true);
    fetchWeather({lat, long}).then((data) => {
      if(!data){
        BottomSheetV1.dismiss()
      }else{
        setWeatherData(data);
        setTimeout(() => {
          setLoad(false);
        }, 1500);
      }
    });
  }, [display]);

  return isload ? (
    <View style={[t.h300]}>
      <Loading.Screen height={400} />
    </View>
  ) : (
    <View style={[t.py4]}>
      {/* Time current Day */}
      <View style={[t.justifyCenter, t.wFull, t.itemsCenter]}>
        <Text style={[t.textWeight700, t.textXxl, t.textGray300]}>
          {display}
        </Text>
        <View style={[t.h14, t.w14, t.itemsCenter, t.justifyCenter]}>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`,
            }}
            style={[t.wFull, t.hFull]}
            resizeMode="contain"
          />
        </View>
        <Text style={[t.textWeight500, t.textXs, t.textGray300]}>
          {weatherData.current.temp}°
        </Text>
        <Text style={[t.textWeight500, t.textSm, t.textGray300]}>
          {weatherData.current.weather[0].description}
        </Text>
      </View>

      {/* 7-day forecast */}
      <View style={[t.px4, t.py4]}>
        <View
          style={[
            t.rounded3xl,
            t.px4,
            t.py4,
            {backgroundColor: 'rgba(52, 52, 52, 0.1)'},
          ]}>
          {/* title */}
          <View
            style={[
              t.flexRow,
              t.itemsCenter,
              t.borderB,
              t.borderBottomGray300,
            ]}>
            <Icon
              iconName="Calendar"
              width={14}
              color={constants.colors.gray300}
            />
            <Text style={[t.ml2, t.textGray300]}>7-DAY FORECAST</Text>
          </View>
          {/* data */}
          {weatherData.daily.map((item, index, arr) => (
            <View
              key={index}
              style={[
                t.flexRow,
                t.itemsCenter,
                arr[index + 1] != undefined && t.borderB,
                arr[index + 1] != undefined && t.borderBottomGray300,
                t.h12,
                t.justifyBetween,
                t.px2,
                t.flexWrap,
                t.g1,
              ]}>
              <View style={[t.flex1]}>
                <Text style={[t.textGray300,t.textXs]}>
                  {index === 0 ? 'Today' : convertDate(item.dt)}
                </Text>
              </View>
              <View style={[t.flex1]}>
                <Image
                  source={{
                    uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                  }}
                  style={[t.w12, t.h12]}
                  resizeMode="contain"
                />
              </View>

              <View style={[t.flex1, t.flexRow, t.itemsEnd]}>
                <Text style={[t.textGray300,t.textXs]}>{item.temp.min}° </Text>
                <Text style={[t.textGray300, t.textWeight500, t.textXxs]}>
                  Min
                </Text>
              </View>
              <View style={[t.flex1, t.flexRow, t.itemsEnd]}>
                <Text style={[t.textGray300,t.textXs]}>{item.temp.max}° </Text>
                <Text style={[t.textGray300, t.textWeight500, t.textXxs]}>
                  Max
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default TemplateWeatherInfo;
