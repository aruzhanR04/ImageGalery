export const measureImageLoadTime = (imageSrc) => {
    const image = new Image();
    const startTime = performance.now();
    image.src = imageSrc;
    image.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Image loaded in ${loadTime} milliseconds`);
    };
  };