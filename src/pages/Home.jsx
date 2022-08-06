import React from "react";
import "../style.scss";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Home = () => {
    const category = ''
    return(
        <div className="wraper">
            <Header />
            <Catalog category={category}/>
            <Footer />
        </div>
    )
}

export default Home