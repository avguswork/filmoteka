import React from "react";
import "../style.scss";
import Card from "../components/Card/Card"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Video = () => {
    return(
        <div className="wraper">  
            <Header />
            <Card />
            <Footer />
        </div>
    )
}


export default Video