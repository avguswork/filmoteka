import React from "react";
import Catalog from "../components/Catalog/Catalog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useSelector, useDispatch } from 'react-redux';

const Films = () => {

    
    const category = 'films'
    return(
        <>
            <Header />
            <Catalog category={category}/>
            <Footer />
        </>
    )
}

export default Films;