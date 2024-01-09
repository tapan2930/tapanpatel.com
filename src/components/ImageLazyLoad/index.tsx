import Image from 'next/image';
import React from 'react';
// import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ alt,src, width = 500, height = 500, placeholderSrc, style }:any) => (
  // placeholderSrc,wrapperStyle,style
    <>
    <Image alt={alt}
        src={src} width={width} height={height} placeholder={"blur"} blurDataURL = {placeholderSrc} style={style} />
       {/* <LazyLoadImage
        alt={alt}
        src={src} 
        effect="blur"
        placeholderSrc={placeholderSrc}
        style={style}
        wrapperClassName={wrapperStyle}
        /> */}
    </>
  );
   
  export default MyImage;