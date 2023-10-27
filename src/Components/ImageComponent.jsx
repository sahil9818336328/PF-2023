import { useEffect } from 'react'
import { useState } from 'react'
import { Blurhash } from 'react-blurhash'

/* eslint-disable react/prop-types */
const ImageComponent = ({ src, alt, className, width, height, hash }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = src
  }, [src])

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && <img src={src} alt={alt} className={className} />}
    </>
  )
}
export default ImageComponent
