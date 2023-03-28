import React, {useState, useEffect} from 'react'

const Lazy = ({src, alt}) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return <img src={imageSrc} alt={alt}  />;


}

export default Lazy
