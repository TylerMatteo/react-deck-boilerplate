import Map from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto/typed";
import maplibregl from "maplibre-gl";
import DeckGL from "deck.gl/typed";
import "./App.css";

function App() {
  return (
    <DeckGL
      initialViewState={{
        longitude: -74.0008,
        latitude: 40.7018,
        zoom: 9.7,
      }}
      controller={true}
    >
      <Map mapLib={maplibregl} mapStyle={BASEMAP.POSITRON} />
    </DeckGL>
  );
}

export default App;
