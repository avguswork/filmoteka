import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Films = () => {
    const category = 'films'
    return(
        <div className="wraper">
            <Header />
            <Catalog category={category}/>
            <Footer />
        </div>
    )
}

export default Films;