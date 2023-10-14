import "./index.css";
import Hero from "./components/Hero";
import MusicNotesBG from "./components/MusicNotesBG";
import Splitter from "./components/Splitter";

function App() {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      {/** Background  */}
      <MusicNotesBG />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 50,
        }}
      >
        {/** Components rendered in here will be on top of the Canvas Background*/}
        <div className="split-layout">
          <div className="hero-container">
            <Hero />
          </div>
          <div className="splitter-container">

            {/* Contains logic for file upload which will be sent to Python Backend */}
            <Splitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
