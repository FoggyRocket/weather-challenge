import {createContext, useState} from 'react';

interface objectKeys {
  [key: string]: object;
}

export interface LocationState {
  data: Array<objectKeys>;
}

interface LocationsProps {
  locations: Array<objectKeys>;
  setLocationsState: (newStateLocation: Array<objectKeys>,locationName:string) => void;
  isSearching:boolean;
  locationName:string;
  cleanLocationsState:()=>void;
}

export const LocationsContext = createContext({} as LocationsProps);

export const LocationsProvider = ({children}: any) => {
  const [locations, setLocations] = useState<Array<objectKeys>>([]);
  const [locationName,setLocationName]  = useState<string>('')
  const [isSearching,setIsSearching] = useState<boolean>(false)
  const setLocationsState = (newStateLocation: Array<objectKeys>,locationName:string) => {
    setLocations(newStateLocation);
    setIsSearching(true)
    setLocationName(locationName)
  };

  const cleanLocationsState =()=>{
    setLocationName('')
    setIsSearching(false)
    setLocations([])
  }

  return (
    <LocationsContext.Provider
      value={{
        locations,
        setLocationsState,
        isSearching,
        locationName,
        cleanLocationsState
      }}>
      {children}
    </LocationsContext.Provider>
  );
};
