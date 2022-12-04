import { 
  MapContainer,
  TileLayer,
  GeoJSON
} from 'react-leaflet';
import data from './PL.json';
import MinimapControl from './components/Minimap';
import Logger from './components/Logger';

function App() {
  return (
    <MapContainer
      style={{ width: '100%', height: '600px' }} 
      center={[52, 19.4]}
      zoom={6}
      scrollWheelZoom={false}
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <MinimapControl position="topright" />
      <Logger />
      <GeoJSON data={data.features} />
    </MapContainer>
  );
}

export default App;
