import MainHeader from "./components/MainHeader/mainHeader";
import HomeScreen from "./screens/HomeScreen/homeScreen";
import DashBoardScreen from "./screens/DashBoardScreen/dashBoardScreen";
import EditPage from "../src/screens/EditProfile/main-edit-prof/maineditprof.jsx"
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
          <Route path="/edit"
          element={<EditPage />} />
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
