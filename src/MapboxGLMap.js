import React, { useEffect, useRef, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";  
import marker from "./marker.svg";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute",
  latitude: 42.43234,
  longitude: -123.43567,
  zoom: 1


};


function MapboxGLMap () {
    const [map, setMap] = useState(styles);
    const [userLocation, setuserLocation] = useState(null);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {            
            let newViewport = {
                width: "100vw",
                height: "100vh",
                position: "absolute",
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 16
            }
            setMap(newViewport)
        })
    }, []);


  return (
        <div>
            <ReactMapGL {...map}             
            mapboxApiAccessToken="pk.eyJ1IjoiZ2xvZXIiLCJhIjoiY2l2cm4ya3hxMDAyYTJ6bHU5MzZjcHNnbSJ9.PmFpGo0iUpws5YtIBnzVBQ" 
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={(viewport => setMap(viewport))}
            >
                <Marker
                    latitude={map.latitude}
                    longitude={map.longitude}
                    >
                    <img className="location-icon" src={marker} />
                    </Marker>
            </ReactMapGL>
        </div>
    )
};

export default MapboxGLMap;