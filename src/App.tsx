import JSX from "./fundanmental/JSX";
import Props from "./fundanmental/Props";
import State from "./fundanmental/State";
import SonColorBox from "./sampleApp/son/SonColorBox";
import TonyColorBox from "./sampleApp/tony/TonyColorBox";
import ColorBoxNam from "./sampleApp/namtt/colorboxnam/ColorBox"
import TrafficLightNam from "./sampleApp/namtt/lightgamenam/TrafficLightNam"
import Tabs from "./sampleApp/namtt/tabsnam/Tabs"
import Event from "./fundanmental/Event";

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

      <br />
      <Tabs />

      <br />
      <br />
      <Event />
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
