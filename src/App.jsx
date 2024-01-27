import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './Views/Error404.jsx'
import Home from './Views/Home.jsx'
import Events from './Views/Events.jsx'
import Donations from './Views/Donations.jsx'
import About from './Views/About.jsx'
import Contact from './Views/Contact.jsx'
import Smriti24 from "./Views/Smriti24.jsx";

function App() {

  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#EF574A'
          progress={progress}
          height={3}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/about" element={<About setProgress={setProgress} />} />
          <Route path="/events" element={<Events setProgress={setProgress} />} />
          <Route path="/donations" element={<Donations setProgress={setProgress} />} />
          <Route path="/contact" element={<Contact setProgress={setProgress} />} />
          <Route path="/smriti24" element={<Smriti24 setProgress={setProgress} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
