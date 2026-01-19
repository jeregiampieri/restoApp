import { Categories } from "./assets/components/Categories/Categories.jsx"
import { Hero } from "./assets/components/Hero/Hero.jsx"
import { Layout } from "./assets/components/Layout/Layout.jsx"
import { Navbar } from "./assets/components/Navbar/Navbar.jsx"

function App() {
 
  return (
    <>
      {/* Navbar */}
      <Navbar/>
      {/* MAIN */}
      <Layout>
        <Hero></Hero>
        <Categories></Categories>
      </Layout>
      {/* Footer */}
    </>
  )
}

export default App


