import axios from "axios"
interface paramsWeather {
    lat:number|string,
    long:number|string
}
const weatherEndpoint = (params:paramsWeather)=> `${process.env.API_WEATHER}/onecall?lat=${params.lat}&units=metric&lon=${params.long}&appid=${process.env.API_KEY}`;
const locationEndpoint = (params:string) => `${process.env.API_LOCATION}/places?q=${params}`;

const apiCall = async(endpoint:string) =>{
    const options = {
        method:'GET',
        url:endpoint
    }
    try{
        const response = await axios.request(options)
        return response.data;
    }catch(error){
        console.log("error:",error)
        console.error(error)
        return null
    }
}


export const fetchLocation = (params:string) =>{
    return apiCall(locationEndpoint(params));
}

export const fetchWeather = (params:paramsWeather) =>{
    return apiCall(weatherEndpoint(params));
}