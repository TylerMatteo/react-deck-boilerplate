import { DeckGL } from "@deck.gl/react";
import { Map } from "react-map-gl/maplibre";
import { ZoomWidget, CompassWidget } from "@deck.gl/widgets";
import "@deck.gl/widgets/stylesheet.css";
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
      widgets={[
        new ZoomWidget({ placement: "top-right" }),
        new CompassWidget({ placement: "top-right" }),
      ]}
    >
      <Map
        mapStyle={"https://tiles.planninglabs.nyc/styles/positron/style.json"}
      ></Map>
    </DeckGL>
  );
}

export default App;
