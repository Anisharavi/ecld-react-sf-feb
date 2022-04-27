import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { ViewMore } from "./components/ViewMore"
import { Students } from "./components/Students";
import { Login} from "./components/Login";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./components/Auth";
import { Requireauth } from "./components/Requireauth";
function App() {
  return (
    
    < AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/students" element={<Requireauth> <Students/> </Requireauth>}/>
        <Route path="/Login" element={<Login />} />

        <Route path="/students/:studId" element={<ViewMore />} />
      </Routes>
      <Footer />
      </AuthProvider>
    
    
  );
}

export default App;
