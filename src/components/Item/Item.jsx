import React from "react";
import "./Item.scss";
import { Link, Outlet } from "react-router-dom";

const Item = (props) => {
    const id = props.video.id
    const image = props.video.image;
    const name = props.video.name;
    const date = props.video.date;
    

    return(
        <div className="film_card_block">
            <Link to={`/filmoteka/video/${id}`}><img src={require(`../../image/${image}`)} alt={name}/></Link>
            <Link to={`/filmoteka/video/${id}`}><button className="film_card_button">{name}</button></Link>
            <p className="date_text">{date}</p>
            <Outlet />
        </div>
    )
}

export default Item