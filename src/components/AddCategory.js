import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const AddCategory = ({setCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputValue = (e) => { //allows to write on input
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => { //manage form submit actions
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategory(cats => [ inputValue, ...cats]); /* Se recuperan los elementos y se añade el otro valor */
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputValue}>
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}