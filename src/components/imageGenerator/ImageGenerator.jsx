import React, { useState, useRef } from 'react'

import default_image from './../assets/default_image.svg'

import './ImageGenerator.css'

const ImageGenerator = () => {

  const [image_url, setImage_url] = useState("/")
  const inputRef = useRef(null)

  const imageGenerator = async () => {

    if (inputRef.current.value === "") {
      return 0;
    }

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/interactions',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': import.meta.env.VITE_GEMINI_API_KEY
        },
        body: JSON.stringify({
          model: 'gemini-3.1-flash-image',
          input: inputRef.current.value
        })
      }
    );

  }

  return (
    <div className="ai-image-generator">

      <div className="header">
        <span>Gerador</span> de Imagens com IA
      </div>

      <div className="img-loading">
        <div className="image">
          <img
            src={image_url === '/' ? default_image : image_url}
            alt=""
          />
        </div>
      </div>

      <div className="search-box">

        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Descreva o que você quer ver..."
        />

        <div className="generate-btn" onClick={imageGenerator}>
          Generate
        </div>

      </div>

    </div>
  )
}

export default ImageGenerator