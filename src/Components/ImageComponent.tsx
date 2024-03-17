import React, { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash';

interface props {
    src:string;
    clas:string;
    hash:string
}

export const ImageComponent:React.FC<props> = (props) => {
    const {src ,clas, hash} = props
    console.log(hash)
   const [imageLoaded, setImageLoded] = useState<boolean>(false);
   useEffect(()=>{
    const img = new Image()
    img.onload = ()=>{
        setImageLoded(true)
    }
    img.src = src
   },[src])
  return (
    <>
        {!imageLoaded &&( 
        <Blurhash
            hash={hash}
            height='100%'
            width='100%'
            resolutionX={32}
            resolutionY={32}
            punch={1}/>
        )}
        {imageLoaded && (
            <img src={src} alt="" className={clas} />
        )
        }
    </>
  )
}
