import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Global from "./styles/Global"

function App() {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Global />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
