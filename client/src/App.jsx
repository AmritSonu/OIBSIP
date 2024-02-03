import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import "./index.css";
import { MainContainer } from "./Components/Main/MainContainer";
import { NotFound } from "./Components/NotFound";
function App() {
  return (
    // Wrap Router for working
    <BrowserRouter>
      {/* // Wrap Router like ul for working  */}
      <Routes>
        {/* route like list... */}
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContainer />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
