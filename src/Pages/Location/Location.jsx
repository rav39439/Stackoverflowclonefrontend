import React, { useEffect, useState } from 'react'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import { useGeolocated } from "react-geolocated";
const Location = () => {

// const[location,setLocation]=useState({
//     loaded:false,
//     cooridinates:{
//         lat:"",
//         lng:""
//     },
// })
// const onSuccess=(location)=>{
//     setLocation({
//         loaded:true,
//         cooridinates:{
//             lat:location.coords.latitude,
//             lng:location.coords.longitude,
//         },
//     });
// };

// const onError=error=>{
//     setLocation({
//         loaded:true,
//         error,
//     })
// }

// useEffect(()=>{
//     if(!("geolocation" in navigator)){
//         setLocation((state)=>({
//             ...state,
//             loaded:true,
//             error:{
//                 code:0,
//                 message:"Geolocation not supported"
//             },
//         }));
//     }
//     navigator.geolocation.getCurrentPosition(onSuccess,onError);
//     console.log(location)
// },[]);
//   return (
// <>
//     <LeftSidebar/>
//     <div></div>

//     </>
//   )


const { coords, isGeolocationAvailable, isGeolocationEnabled } =
useGeolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
});

// return !isGeolocationAvailable ? 

// (
// <div>Your browser does not support Geolocation</div>
// ) : !isGeolocationEnabled ? (
// <div>Geolocation is not enabled</div>
// ) : coords ? (


//     <div style={{display:"flex"}}>

//         <LeftSidebar/>
// <div style={{marginLeft:"100px"}}>
   
//             <p>{coords.latitude}</p>
     
         
//             <p>{coords.longitude}</p>
        
// </div>
// </div>
// ) : (
// <div>Getting the location data&hellip; </div>
// );

return coords

 }

export default Location