import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import AreasPage from "../Areas/AreasPage";
import Contacts from "../Contacts/Contacts";
import FeaturedImages from "../FeaturedImages/FeaturedImages";
import GearCage from "../GearCage/GearCage";
import GetTemplate from "../GetTemplate/GetTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <div>
          <Routes>
                <Route path='/contact' element={<Contacts/>}></Route>
                <Route path='/areas' element={<AreasPage/>}></Route>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/images' element={<FeaturedImages/>}></Route>
                <Route path='/cage' element={<GearCage/>}></Route>
                <Route path='/template' element={<GetTemplate/>}></Route>
            </Routes> 
          </div>
      </BrowserRouter>
    </div>
  );
}
export default App;