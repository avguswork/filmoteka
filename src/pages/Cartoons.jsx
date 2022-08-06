import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Cartoons = () => {
    const category = 'cartoons'
    console.log(category)
    return(
        <div className="wraper">
            <Header />
            <Catalog category={category}/>
            <Footer />
        </div>
    )
}

export default Cartoons