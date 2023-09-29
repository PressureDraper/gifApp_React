import React from "react";
import { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => { //Allow to only execute an instruction once
        const newCat = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=ePEsJ53licCipIuc2sRXvPcfc8cV3A37`;

        setTimeout(() => {
            getGifs(newCat)
            .then(setImages);
          }, 1000);
    }, [category])

    return (
        <div className="card-grid">
            <h2 className="animate__animated animate__slideInLeft">{category}</h2>
            {
                images.filter(img => img.title !== '').map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))
            }
        </div>
    )
}