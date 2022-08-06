import React from "react";
import "./Catalog.scss";
import Data from "../../Data";
import Item from "../Item/Item";

const Catalog = (props) => {

    const category = props.category;
    console.log(category)
    let videoCatalog
    if(category === ''){
         videoCatalog = Data.filter( element => element );
    }
    else{
        videoCatalog = Data.filter( element => element.category === category );
    }
     
    
    return(
        <div className="catalog_block">
           { videoCatalog.map( video => (<Item video={video} key={video.id}/>)) }
        </div>
    )
}

export default Catalog