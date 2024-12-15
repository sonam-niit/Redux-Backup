import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Slider from "./components/Slider"

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Slider />
      <Featured />
      <Footer />
    </div>
  )
}

export default App
