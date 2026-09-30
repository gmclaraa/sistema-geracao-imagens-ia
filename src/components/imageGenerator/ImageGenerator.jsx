import React from 'react'
import default_image from './../assets/default_image.svg'
import './ImageGenerator.css'

const ImageGenerator = () => {
  return (
    <div>
      <div className="ai-image-generator">
        <div className="header">Gerador de Imagens com IA <span>gerador</span></div>
        <div className="img-loading">
          <div className="image"><img src={default_image} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default ImageGenerator