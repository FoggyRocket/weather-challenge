import {useState} from 'react';
import {View} from 'react-native';
import Input from '../Input';
import {t} from '@styles';

function SearchBar() {
  const [wordSearch, setWordSearch] = useState<string>('');
  return (
    <View style={[t.h16, t.justifyCenter, t.px2]}>
      <Input
        value={wordSearch}
        onChangeText={setWordSearch}
        onClean={() => setWordSearch('')}
        variant="search"
        placeholder="Search for a city or airport"
      />
    </View>
  );
}

export default SearchBar;
