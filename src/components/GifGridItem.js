import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
  return (
    <div className='card animate__animated animate__backInLeft'>
        <img src={url} alt={id} width="auto" height="200px"></img>
        <h5>{title}</h5>
    </div>
  )
}
