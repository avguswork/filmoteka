import React from "react";
import "./Catalog.scss";
import Data from "../../Data";
import Item from "../Item/Item";
import {useSearchParams} from "react-router-dom";
import moment from 'moment';

const Catalog = (props) => {

    const [searchParams] = useSearchParams();
    
    let videoCatalog = Data.filter( element => element )
    
    const Search = () => {
        if(props.category){videoCatalog = Data.filter( element => element.category === props.category )};
        let search = searchParams.get("search");
        if(search){
            videoCatalog  = Data.filter(element =>  element.name.toLowerCase().startsWith(search.toLowerCase()))
        }
        let genres = searchParams.get("genre");
        if(genres){
            videoCatalog = videoCatalog.filter(element => element.genre.find(elem => elem === genres))
          }
        let sort = searchParams.get("sort")
        if(sort === 'date'){
             videoCatalog.sort((a, b) => moment(a.date, 'DD.MM.YYYY') - moment(b.date, 'DD.MM.YYYY'))  
        }
        else if(sort === 'name'){
            videoCatalog.sort((x, y) => {if (x.name < y.name) {return -1;} return 0;}) 
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