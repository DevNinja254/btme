import {BrowserRouter, Route} from "react-router-dom"
import {Routes} from "react-router"
import Homepage from "./components/Homepage";
import Stream from "./pages/Stream"
import MaterialScience from "./pages/units/MaterialScience";
import NotFound from "./pages/NotFound"
import News from "./pages/News";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Homepage/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/stream" element={<Stream/>}></Route>
        <Route path="/units/tmc4224" element={<MaterialScience/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/posts" element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

