import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import Genre from "../components/Genre/Genre";
import Header from "../components/Header/Header";
import Sorting from "../components/Sorting/Sorting";


const Films = () => {
    const category = 'films'
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

export default Films;