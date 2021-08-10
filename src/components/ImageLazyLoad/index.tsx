import React from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ alt,src,placeholderSrc,wrapperStyle,style }:any) => (
    <>
      <LazyLoadImage
        alt={alt}
        src={src} 
        effect="blur"
        placeholderSrc={placeholderSrc}
        style={style}
        wrapperClassName={wrapperStyle}
        />
    </>
  );
   
  export default trackWindowScroll(MyImage);