//Libs
import { Route,Routes } from "react-router-dom";
//Components
import  Header  from "./components/header";
//paginas
import { WellcomePage } from "./routes/wellcome";

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<WellcomePage/>}/>  
      </Routes>
    </>
    
  )
}

export default App
