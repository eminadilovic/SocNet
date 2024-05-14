import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default useLocation = () =>{
    const [location, setLocation] = useState();


    const getUserLocation = async () => {

        try {
        const {granted} = await Location.requestForegroundPermissionsAsync();

        if(!granted) return;
        
        const {coords} = await Location.getCurrentPositionAsync();
        setLocation({'latitude':coords.latitude,'longitude': coords.longitude});
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        getUserLocation();
    },[])

    return location;
};
