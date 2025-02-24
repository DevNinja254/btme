import {BrowserRouter, Route} from "react-router-dom"
import {Routes} from "react-router"
import Homepage from "./components/Homepage";
import Stream from "./pages/Stream"
import MaterialScience from "./pages/units/MaterialScience";
import NotFound from "./pages/NotFound"
import News from "./pages/News";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Cad from "./pages/units/Cad"
import Economics from "./pages/units/Economics"
import Solid from "./pages/units/Solid"
import Statistics from "./pages/units/Statistics"
import Fluid from "./pages/units/Fluid"
import Thermo from "./pages/units/Thermo"
import MecOfMachine from "./pages/units/MecOfMachine"
import Pending from "./pages/assign/Pending";
import Submited from "./pages/assign/Submited";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Homepage/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/stream" element={<Stream/>}></Route>
        <Route path="/units/tmc4224" element={<MaterialScience/>}></Route>
        <Route path="/units/tmc4221" element={<Cad/>}></Route>
        <Route path="/units/tmc4222" element={<MecOfMachine/>}></Route>
        <Route path="/units/tmc4225" element={<Fluid/>}></Route>
        <Route path="/units/tcu4223" element={<Solid/>}></Route>
        <Route path="/units/ama4203" element={<Statistics/>}></Route>
        <Route path="/units/tmc4226" element={<Thermo/>}></Route>
        <Route path="/units/bfi4204" element={<Economics/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/posts" element={<Post/>}></Route>
        <Route path="/course/assignments/pending" element={<Pending/>}></Route>
        <Route path="/course/assignments/submited" element={<Submited/>}></Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

