import Header from "./components/header"
import Contents from "./components/contents"
import Footer from "./components/footer"
import "./index.scss";
import { useEffect } from "react";
import ProductService from "./services/productService";

function App() {

  useEffect(()=>{

    ProductService.prototype.getAllProducts();
    
  },[])
  return (
    <div className="app">
      <Header/>
      <Contents/>
      <Footer/>
    </div>
  )
}

export default App
