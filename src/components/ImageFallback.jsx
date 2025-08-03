// src/components/ImageFallback.jsx
// src/components/ImageFallback.js
import React, { useState } from 'react';

const ImageFallback = ({ src, alt, className, fallbackText = "Image" }) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`}>
        {fallbackText}
      </div>
    );
  }
  
  return (
    <img 
      src={`${process.env.PUBLIC_URL}/${src}`} 
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default ImageFallback;