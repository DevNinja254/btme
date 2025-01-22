import {BrowserRouter, Route} from "react-router-dom"
import {Routes} from "react-router"
import Homepage from "./components/Homepage";
import Stream from "./pages/Stream"
import MaterialScience from "./pages/units/MaterialScience";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Homepage/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/stream" element={<Stream/>}></Route>
        <Route path="/units/tmc4224" element={<MaterialScience/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

