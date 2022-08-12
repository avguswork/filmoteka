import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import Genre from "../components/Genre/Genre";
import Header from "../components/Header/Header";
import Sorting from "../components/Sorting/Sorting";

const Series = () => {
    const category = 'series'
    return(
        <div className="wraper">
            <Header />
            <Genre />
            <Sorting />
            <Catalog category={category}/>
            <Footer />
        </div>
    )
}

export default Series