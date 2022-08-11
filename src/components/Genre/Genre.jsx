import React from "react";
import "./Genre.scss";
import { useSearchParams } from "react-router-dom";

const categoryButon = [ 'Бойовик', 'Пригоди', 'Фентезі', 'Фантастика', 'Сімейний', 'Мультфільм', 'Драма', 'Трилер', 'Жахи', 'Кримінал', ]

const Genre = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const searchCategory = (event) => {
        const setParams = searchParams.get("genre") || ""
        let genre = event.target.value;
        if (genre) {
            setSearchParams({ genre });
        } else {
            setSearchParams({});
        }
        
}
    return(
        <>

        <div className="genre">
                <h3>Категорії</h3>
                <div className="genre_row">
                    { categoryButon.map(elem => (<button className="genre_button" onClick={searchCategory} value={elem} key={elem}>{elem}</button>)) }     
                </div>
            </div>



            
        </>
    )
}

export default Genre;