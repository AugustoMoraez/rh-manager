//Libs
import { Route,Routes } from "react-router-dom";
//Components
import  Header  from "./components/header";
//paginas
import { WellcomePage } from "./routes/wellcome";
import { LoginPage } from "./routes/auth/login";

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<WellcomePage/>}/>  
        <Route path="/autenticar/login" element={<LoginPage/>}/>  
      </Routes>
    </>
    
  )
}

export default App
