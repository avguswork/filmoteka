import React from "react";
import "../style.scss";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Genre from "../components/Genre/Genre";

const Home = () => {
    const category = ''
    return(
        <div className="wraper">
            <Header />
            <Genre />
            <Catalog category={category}/>
            <Footer />
        </div>
    )
}

export default Home