import React from "react";
import "./Catalog.scss";
import Data from "../../Data";
import Item from "../Item/Item";
import {useSearchParams} from "react-router-dom";

const Catalog = (props) => {

    const [searchParams] = useSearchParams();
    const category = props.category;
    let videoCatalog = Data.filter( element => element )
    
    const Search = () => {
        if(category){
           videoCatalog = Data.filter( element => element.category === category );
       }
        let genres = searchParams.get("genre");
        let search = searchParams.get("search");
        if(search){
            videoCatalog  = Data.filter(element =>  element.name.toLowerCase().startsWith(search.toLowerCase()))
        }
        else if(genres){
            videoCatalog = videoCatalog.filter(element => element.genre.find(elem => elem === genres))
          }
    }
    
    return(
        <div className="catalog">
            
            <div className="catalog_block">
                {Search()}
                { videoCatalog.map( video => (<Item video={video} key={video.id}/>)) }
            </div>
        </div>
    )
}

export default Catalog