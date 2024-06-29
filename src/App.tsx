import { DeckGL } from "@deck.gl/react";
import { Map } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { ZoomWidget, CompassWidget } from "@deck.gl/widgets";
import "./App.css";
import "@deck.gl/widgets/stylesheet.css";

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
        new ZoomWidget({
          id: "zoom",
          placement: "bottom-left",
          // Note the below styles will not be applied.
          // Changing to dash cased string key ("border-color": "red")
          // fixes the issue but then typescript complains
          style: {
            borderColor: "red",
            borderStyle: "solid",
            borderWidth: "3px",
          },
        }),
        new CompassWidget({ id: "compass", placement: "bottom-left" }),
      ]}
    >
      <Map
        mapStyle={"https://tiles.planninglabs.nyc/styles/positron/style.json"}
      />
    </DeckGL>
  );
}

export default App;
