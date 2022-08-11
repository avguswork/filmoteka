import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import Genre from "../components/Genre/Genre";
import Header from "../components/Header/Header";

const Series = () => {
    const category = 'series'
    return(
        <div className="wraper">
            <Header />
            <Genre />
            <Catalog category={category}/>
            <Footer />
        </div>
    )
}

export default Series