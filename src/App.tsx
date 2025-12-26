import JSX from "./fundanmental/JSX";
import Props from "./fundanmental/Props";
import State from "./fundanmental/State";
import SonColorBox from "./sampleApp/son/SonColorBox";
import TonyColorBox from "./sampleApp/tony/TonyColorBox";
import ColorBoxNam from "./sampleApp/namtt/ColorBox"
import TrafficLightNam from "./sampleApp/lightgameplan/TrafficLightNam"

function App() {
  return (
    <>
      <JSX />

      <br />

      <Props />

      <br />
      <State />

      <br />
      <TonyColorBox />

      <SonColorBox />
      <ColorBoxNam />

      <br />
      <TrafficLightNam />
    </>
  );
}

export default App;
