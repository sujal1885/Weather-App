import Homepage from "./pages/Homepage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Results from "./pages/Results";

function App() {
  return (
    <div>
      {/* <Homepage/> */}
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Homepage/>}></Route>
              <Route path='/results' element={<Results/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
