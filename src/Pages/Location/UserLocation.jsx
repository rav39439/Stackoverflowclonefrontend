import React from 'react'
import Location from './Location'
import { useGeolocated } from "react-geolocated";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker , Popup} from "react-leaflet";
//import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet';
import * as L from "leaflet";
import marker from './origami.png'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar';

const UserLocation = () => {
  const BoatIcon = L.icon({
    iconUrl: marker,
    iconSize: [40, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
});



//     const markericon=L.Icon({
// iconUrl:require("../../assets/origami.png"),
//       iconSize:[35,45],
//       iconAnchor:[17,46],
//       popupAnchor:[0,-46]
//     })
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    
    const position=[coords?.latitude,coords?.longitude]
    return !isGeolocationAvailable ? 
    
    (
    <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
    ) : coords ? (
    
    
        <div style={{display:"flex"}}>
    
            <LeftSidebar/>
    <div style={{marginLeft:"100px"}}>
       
                <p>Latitude: {coords.latitude}</p>
         
             
                <p>Longitude: {coords.longitude}</p>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

                <MapContainer center={position} zoom={9} scrollWheelZoom={false} style={{width: "200px", height:"50px",marginLeft:"400px"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
 <Marker position={position} icon={BoatIcon}>   
 <Popup>
  You are here
  </Popup>  
    </Marker>
  </MapContainer>
            
    </div>
    </div>
    ) : (
    <div></div>

 




    );
    

}

export default UserLocation