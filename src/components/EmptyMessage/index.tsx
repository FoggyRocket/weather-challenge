import {Text, View} from 'react-native';
import Icon from '../Icon';
import {constants, t} from '@styles';

interface EmptyMessageProps{
    value?:string
}
function EmptyMessage({value,...props}:EmptyMessageProps) {
  return (
    <View style={[t.flex1,t.justifyCenter,t.itemsCenter,t.h300]}>
      <View>
        <Icon
          color={constants.colors.gray400}
          iconName="SearchNormal"
          height={24}
        />
      </View>
      <Text>No Results</Text>
      <Text>No results found for "{value}"</Text>
    </View>
  );
}


export default EmptyMessage