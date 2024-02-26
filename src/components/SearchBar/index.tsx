import {useContext, useState} from 'react';
import {View} from 'react-native';
import Input from '../Input';
import {t} from '@styles';
import { LocationsContext } from '@context/apiResponseContext';
import { fetchLocation } from '@api/endpoints';

function SearchBar() {
  const {setLocationsState,cleanLocationsState} = useContext(LocationsContext)
  const [wordSearch, setWordSearch] = useState<string>('');


  const handleSearch  =(word:string)=>{
    if(word.length > 2){
      fetchLocation(word).then((data)=>{
  
          setLocationsState(!data ? [] : data,word)
        
      })
    }
    setWordSearch(word)
   
  }
  return (
    <View style={[t.h16, t.justifyCenter, t.px2]}>
      <Input
        value={wordSearch}
        onChangeText={handleSearch}
        onClean={() => {
          setWordSearch('')
          cleanLocationsState()
        }}
        variant="search"
        placeholder="Search for a city or airport"
      />
    </View>
  );
}

export default SearchBar;
