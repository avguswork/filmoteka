import React from "react";
import "./Catalog.scss";
import Data from "../../Data";
import Item from "../Item/Item";
import {useSearchParams} from "react-router-dom";

const Catalog = (props) => {

    const [searchParams] = useSearchParams();
    const category = props.category;
    
    let videoCatalog
    

    const Search = () => {
        let search = searchParams.get("search");
        if(category === ''){
            videoCatalog = Data.filter( element => element );
       }
       else{
           videoCatalog = Data.filter( element => element.category === category );
       }
      if(search){
        videoCatalog  = Data.filter(element => {
          return  element.name.toLowerCase().startsWith(search.toLowerCase());
      })}
    }
     
    
    return(
        <div className="catalog_block">
            {Search()}
           { videoCatalog.map( video => (<Item video={video} key={video.id}/>)) }
        </div>
    )
}

export default Catalog