import { useState } from 'react';
import { 
  MapContainer,
  TileLayer,
  GeoJSON,
  useMapEvents,
  useMap,
  Marker,
  Popup
} from 'react-leaflet';
import data from './PL.json';
import MinimapControl from './components/Minimap';
// import Logger from './components/Logger';

const Events = () => {
  const [marker, setMarker] = useState(null);
  const map = useMap();
  useMapEvents({
    click(e) {
      console.log(e);
      console.log(map);
    },
    contextmenu(e) {
      setMarker(e.latlng)
    }
  })

  return marker && (
    <Marker position={marker}>
      <Popup>You clicked here dumbass!</Popup>
    </Marker>
  );

}

const App = () => (
  <MapContainer
    style={{ width: '100%', height: '600px' }} 
    center={[52, 19.4]}
    zoom={6}
    zoomControl={false}
    dragging={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MinimapControl position="topright" />
    {/* <Logger /> */}
    <GeoJSON data={data.features} />
    <Events />
  </MapContainer>
);

export default App;
