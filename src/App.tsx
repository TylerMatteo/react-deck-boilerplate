import Map from "react-map-gl";
import { BASEMAP } from "@deck.gl/carto/typed";
import { useState } from "react";
import maplibregl from "maplibre-gl";
import DeckGL, { LinearInterpolator } from "deck.gl/typed";
import "./App.css";

function App() {
  const [viewState, setViewState] = useState<any>({
    longitude: -74.0008,
    latitude: 40.7018,
    zoom: 9.7,
  });

  return (
    <div>
      <DeckGL
        viewState={viewState}
        onViewStateChange={(e) => setViewState(e.viewState as typeof viewState)}
        controller={true}
      >
        <Map mapLib={maplibregl} mapStyle={BASEMAP.POSITRON} />
      </DeckGL>
      <div className="card">
        <button
          onClick={() => {
            setViewState({
              ...viewState,
              zoom: viewState.zoom + 0.5,
              transitionDuration: 500,
              transitionInterpolator: new LinearInterpolator(),
            });
          }}
        >
          zoom in
        </button>
        <br />
        <button
          onClick={() => {
            setViewState({
              ...viewState,
              transitionDuration: 500,
              transitionInterpolator: new LinearInterpolator(),
              zoom: viewState.zoom - 0.5,
            });
          }}
        >
          zoom out
        </button>
      </div>
    </div>
  );
}

export default App;
