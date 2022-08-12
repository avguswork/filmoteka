import React from "react";
import "./Sorting.scss";
import { useSearchParams } from "react-router-dom";

const sort = [
    { name: 'Немає', value: 'none'},
    { name: 'Назва', value: 'name'}, 
    { name: 'Дата', value: 'date'},
]

const Sorting = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const setSorting = (event) => {
        const setParams = searchParams.get("sort") || ""
        let sort = event.target.value;
        if (sort) {
            setSearchParams({ sort });
        } else {
            setSearchParams({});
        }   
    }

    return(
        <>
            <div className="sorting">
                <h4>Сортування</h4>
                <select className="select" onChange={setSorting }>
                    {sort.map((element) => <option value={element.value} key={element.value}>{element.name}</option>)}
                </select>
            </div>
        </>
    )
}

export default Sorting