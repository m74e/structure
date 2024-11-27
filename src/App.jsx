import MainHeader from "./components/MainHeader/mainHeader";
import HomeScreen from "./screens/HomeScreen/homeScreen";
import DashBoardScreen from "./screens/DashBoardScreen/dashBoardScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <> 
      <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/"
        element={
      <div>
      
        
        <HomeScreen />
      </div>
      } />
        <Route path="/dashboard"
          element={<DashBoardScreen />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
