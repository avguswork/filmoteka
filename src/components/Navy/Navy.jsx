import React from "react";
import  "./Navy.scss";
import { Link, useSearchParams } from "react-router-dom";

const burgerMenu = () => {
    const menu = document.querySelector('#menu')
    menu.classList.toggle('visible')
}

const buttonCategory = [

    {
        id: 1,
        name: '',
        value: 'Головна',
    },
    
    {
        id: 1,
        name: 'films',
        value: 'Фільми',
    },
    {
        id: 2,
        name: 'series',
        value: 'Серіали',
    },
    {
        id: 3,
        name: 'cartoons',
        value: 'Мультики',
    },
]

const Navy = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const SetSearchParam = (event) => {
        const setParams = searchParams.get("search") || ""
            let search = event.target.value;
            if (search) {
              setSearchParams({ search });
            } else {
              setSearchParams({});
            }}

            
    return( 
        <div className="navy">
            <h2 className="logo">FILM📹OTEKA</h2>
            <div className="button_block" id="buttonBlock">
                {buttonCategory.map((button) => {
                    return (
                        <Link to={`/filmoteka/${button.name}`} key={button.name}> 
                             <button key={button.id} name={button.name} className="navy_button">{button.value}</button> 
                        </Link>)
                })}
            </div>
                
            <div className="search_block">
                <form >
                    <input type="search" className="search" placeholder="Пошук.."  onChange={SetSearchParam}/>
                </form>
            </div>  
            <button className="burger_button" onClick={burgerMenu}>☰</button>
            <div className="burger_menu" id="menu">
                {buttonCategory.map((button) => {
                    return (
                        <Link to={`/filmoteka/${button.name}`} key={button.name}> 
                            <button key={button.id} name={button.name} className="navy_button">{button.value}</button> 
                        </Link>)
                })}
                <button className="header_button" onClick={burgerMenu}>X</button>
            </div>
        </div>
            
        
    )
}

export default Navy


