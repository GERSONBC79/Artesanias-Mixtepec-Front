import Footer from "../global/Footer.jsx";
import MainCarousel from "./MainCarousel.jsx"
import ShoppingList from "./ShoppingList.jsx"


const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Footer />
    </div>
  )
}

export default Home;
