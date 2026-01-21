import { Categories } from "./assets/components/Categories/Categories.jsx"
import { Footer } from "./assets/components/Footer/Footer.jsx"
import { Hero } from "./assets/components/Hero/Hero.jsx"
import { Layout } from "./assets/components/Layout/Layout.jsx"
import { Navbar } from "./assets/components/Navbar/Navbar.jsx"
import { Products } from "./assets/components/Products/Products.jsx"

function App() {
 
  return (
    <>
      {/* Navbar */}
      <Navbar/>
      {/* MAIN */}
      <Layout>
        <Hero></Hero>
        <Categories></Categories>
        <Products></Products>
      </Layout>
      {/* Footer */}
      <Footer></Footer>
      {/* Footer */}
    </>
  )
}

export default App


