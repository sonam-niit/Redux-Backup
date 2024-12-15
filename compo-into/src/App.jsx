import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Header from "./components/Header"
import UseCase1 from "./components/JSXExamples/UseCase1"
import UseCase2 from "./components/JSXExamples/UseCase2"
import Slider from "./components/Slider"

function App() {
  return (
    <div className="container-fluid">
      <UseCase1 />
      <UseCase2 />
      {/* <Header />
      <Slider />
      <Featured />
      <Footer /> */}
    </div>
  )
}

export default App
