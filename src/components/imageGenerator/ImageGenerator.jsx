import React, { useState, useRef } from 'react'
import default_image from './../assets/default_image.svg'
import './ImageGenerator.css'
import { InferenceClient } from '@huggingface/inference'

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/")
  const inputRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    setLoading(true);

    const client = new InferenceClient(
      import.meta.env.VITE_HF_TOKEN
    )

    const image = await client.textToImage({
      model: "black-forest-labs/FLUX.1-schnell",
      inputs: inputRef.current.value,
    })

    const imageUrl = URL.createObjectURL(image)

    setImage_url(imageUrl);
    setLoading(false); 
  }

  return (
    <div className="ai-image-generator">
      <div className="header"><span>Gerador</span> de imagens com IA</div>

      <div className="img-loading">
        <div className="image">
          <img
            src={image_url === '/' ? default_image : image_url}
            alt=""
          />
        </div>
        <div className="loading">
          <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
          <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Descreva sua imagem... (inglês recomendado)"
        />
        <div
          className="generate-btn"
          onClick={() => { imageGenerator() }}
        >
          Gerar Imagem
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator