import React from "react";
import './Adminpanel.scss';
//import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addVideo } from "../../store/videoSlice";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable} from "firebase/storage";
import {firebaseConfig} from '../../firebase';

const genre = [ 'Бойовик', 'Пригоди', 'Фентезі', 'Фантастика', 'Сімейний', 'Драма', 'Трилер', 'Жахи', 'Кримінал', ]

const Adminpanel = () => {
    //const vid = useSelector()
   // const dispatch = useDispatch()
    //const proba = dispatch(addVideo())

      


    const film = {};

    const addfilmName = (event) => {
        film.name = event.target.value
    }
    const addfilmCategory = (event) => {
        film.category = event.target.value
    }
    const addfilmGenre = (event) => {
        film.genre = event.target.value
    }
    const addfilmdate = (event) => {
        film.date = event.target.value
    }

    //Добавления картинки в storage
    const addfilmImage = (event) => {
        const app = initializeApp(firebaseConfig);
        const storage = getStorage();
        const file = event.target.files[0];
        film.image = file.name
        console.log(file)
        const storageRef = ref(storage, `/films/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
    }
    //
    const addfilmDescription = (event) => {
        film.description = event.target.value
    }
    const addfilmVideo = (event) => {
        film.video = event.target.value
    }
    
    const SetFilmsToStorage = () => {
         return  fetch('https://avgus-filmoteka-default-rtdb.europe-west1.firebasedatabase.app/films.json',
        {
           method: 'POST',
           body: JSON.stringify(film),
           headers: { 'Content-Type': 'aplication/json'}
        })
        .then(response => response.json())
       .then(response => { console.log(response)})
    }


    return(
        <div className="admin">
            <div className="admin_row">
                <button className="admin_row_button green">Добавити</button>
                <button className="admin_row_button blue">Редагувати</button>
                <button className="admin_row_button red">Видалити</button>
            </div>
            <form className="admin_form">
                <div className="admin_form_label">Категорія:
                    <select className="admin_form_input" onChange={addfilmCategory}>
                        <option value={''}></option>
                        <option value={'films'}>Фільми</option>
                        <option value={'series'}>Серіали</option>
                        <option value={'cartoons'}>Мультики</option>
                    </select>
                </div>
                <div className="admin_form_label">Назва:<input type='text' className="admin_form_input" onChange={addfilmName}/></div>
                <div className="admin_form_genre">
                    {genre.map(element => <div className="admin_form_select" key={element}>{element}<input type={'checkbox'} className="admin_form_input"  onClick={addfilmGenre}/></div>)}
                </div>
                <div className="admin_form_label">Дата виходу:<input type='date' className="admin_form_input" onChange={addfilmdate}/></div>
                <div className="admin_form_label">Зображення:<input type='file' className="admin_form_input" onChange={addfilmImage}/></div>
                <div className="admin_form_label">Опис:<textarea type='text' className="admin_form_textarea" onChange={addfilmDescription}/></div>
                <div className="admin_form_label">Відео:<input type='url' className="admin_form_input" placeholder="https://www.youtube.com/" onChange={addfilmVideo}/></div>
            </form>
            <button className="admin_row_button" onClick={SetFilmsToStorage}>Зберегти</button>
        </div>
    )
}

export default Adminpanel


/*
    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDavObvaoPFkzJiPvSxo1YNTpXfkTCu33k",
  authDomain: "avgus-filmoteka.firebaseapp.com",
  projectId: "avgus-filmoteka",
  storageBucket: "avgus-filmoteka.appspot.com",
  messagingSenderId: "823281006760",
  appId: "1:823281006760:web:fe06fc4fa0b1129c03ea9d",
  measurementId: "G-FL6KYTJXHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

