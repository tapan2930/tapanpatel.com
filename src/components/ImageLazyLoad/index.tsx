import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ alt,scr,placeholderSrc }:any) => (
    <>
      <LazyLoadImage
        alt={alt}
        src={scr} 
        effect="blur"
        placeholderSrc={placeholderSrc}
        style={{"width":"100%", "height":"100%", "objectFit":"cover", "objectPosition": "center" , "display": "block"}}
        wrapperClassName={"w-full h-full object-cover object-center"}
        />
    </>
  );
   
  export default trackWindowScroll(MyImage);