import React from "react";
import  "./Navy.scss";
import { Link } from "react-router-dom";

const buttonCategory = [

    {
        id: 1,
        name: 'home',
        value: 'Главная',
    },
    
    {
        id: 1,
        name: 'films',
        value: 'Фильмы',
    },
    {
        id: 2,
        name: 'series',
        value: 'Сериалы',
    },
    {
        id: 3,
        name: 'cartoons',
        value: 'Мультфильмы',
    },
    

]

const Navy = () => {
    return(
        <>  
            <div className="navy">
                <h2 className="logo">FILM📹OTEKA</h2>
                <div className="button_menu">
                    
                    {buttonCategory.map((button) => {
                        return (
                            <Link to={`/filmoteka/${button.name}`}> 
                                <button key={button.id} name={button.name} className="header_button">{button.value}</button> 
                            </Link>)
                    })}
                </div>
                <div className="search_block">
                    <form >
                        <input type="search" placeholder="Search.." />
                    </form>
                    
                </div>
                    
                
            </div>
            
        </>
    )
}

export default Navy


