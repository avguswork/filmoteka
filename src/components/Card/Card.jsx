import React from "react";
import "./Card.scss";
import { useParams } from "react-router-dom";
import Data from "../../Data";

const openModal = () => {
    const modal = document.querySelector('#modal')
    modal.classList.toggle('visible')
}

const Card = () => {

    const params = useParams()
    
    let video = Data.filter((element) => {
        return element.id === Number(params.id)
    })
    video = video[0]


    return(
        <div className="сard">
            <div className="сard_column">
                <img src={require(`../../image/Large/${video.image}`)} alt={video.name}/>
            </div>
            
            <div className="сard_column">
                <h3>{video.name}</h3>
                <div className="сard_column_row">
                    <h4>Дата</h4>
                    <h5>{video.date}</h5>
                </div>
                <div className="сard_column_row">
                    <h5>{video.description}</h5>
                </div>
                <button className="openModal" onClick={openModal}>Смотреть трейлер</button>
            </div>
            <section className="modal" id="modal">
                <div className="modal_closeButton">
                    <button className="closeButton" onClick={openModal}>X</button>
                </div>
                <div className="modal_window">
                    <iframe width="800" height="470" src={video.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
        </div>
    )
}

export default Card