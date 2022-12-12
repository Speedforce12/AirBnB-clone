import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const Maps = ({ searchResult }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_STYLE}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}>
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}>
            <p
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'>
              📌
            </p>
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              longitude={result.long}
              latitude={result.lat}>
              {result.title}
            </Popup>
          ) : (
            ""
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Maps;
