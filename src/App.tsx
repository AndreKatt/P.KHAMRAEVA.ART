import {Header} from "./Components/Header/Header.tsx";
import {Info} from "./Components/Info/Info.tsx";
import {CrepeDeChine} from "./Modules/CrepeDeChine/CrepeDeChine.tsx";
import {EdenIllusion} from "./Modules/EdenIllusion/EdenIllusion.tsx";
import {GardenCity} from "./Modules/GardenCity/GardenCity.tsx";
import {Metamorphosis} from "./Modules/Metamorphosis/Metamorphosis.tsx";

function App() {
  return (
    <div>
      <Header />
      <Info />
      <Metamorphosis />
      <EdenIllusion />
      <CrepeDeChine />
      <GardenCity />
    </div>
  )
}

export default App
