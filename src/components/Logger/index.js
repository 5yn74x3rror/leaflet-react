import { 
  useMap,
  useMapEvent,
} from 'react-leaflet';

const MapLogger = () => {
  const m = useMap();
  console.log(m.getBounds());
  const onClick = (e) => {
    console.log(e);
  }
  useMapEvent('click', onClick)
};

export default MapLogger;