import JSX from "./fundanmental/JSX";
import Props from "./fundanmental/Props";
import State from "./fundanmental/State";
import SonColorBox from "./sampleApp/son/SonColorBox";
import TonyColorBox from "./sampleApp/tony/TonyColorBox";
import ColorBoxNam from "./sampleApp/namtt/colorboxnam/ColorBox"
import TrafficLightNam from "./sampleApp/namtt/lightgamenam/TrafficLightNam"
import Tabs from "./sampleApp/namtt/tabsnam/Tabs"
import Event from "./fundanmental/Event";
import ConditionalRendering from "./fundanmental/ConditionalRendering";
import LiftingStateUp from "./fundanmental/LiftingStateUp";
import Form from "./fundanmental/Form";
import StateHook from "./fundanmental/StateHook";
import EffectHook from "./fundanmental/EffectHook";
import React from "react";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  const [isShowEffectComponent, setIsShowEffectComponent] = React.useState(true)
  
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
      <ConditionalRendering />

      <br />
      <TodoProvider>
        <LiftingStateUp />
      </TodoProvider>

      <br />
      <Form />

      <br />
      <StateHook />
      
      <br />
      <button type="button" onClick={() => setIsShowEffectComponent(prevState => !prevState)}>Toggle Effect Component</button>
      {isShowEffectComponent && (
        <EffectHook />
      )}
      
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
