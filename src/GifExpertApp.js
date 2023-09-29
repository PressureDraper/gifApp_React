import React, { Fragment, useState } from "react";
/* import PropTypes from "prop-types"; */
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => { //functional component

    const [categories, setCategory] = useState([
        'Rainbow Six Siege'
    ])

    /* const handleAdd = () => {
        setCategory(['Borgore', ...categories]) //Add element first
        setCategory([...categories, 'Borgore']) //Add element to last position
    } */

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={ setCategory }/> {/* Sólo se manda la función, los elementos se recuperan del lado del otro componente, addcategory añade elementos al array mediante setCategory */}
            <hr></hr>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
            </ol>
        </Fragment>
    )

}

export default GifExpertApp;