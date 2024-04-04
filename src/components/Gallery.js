import React, { useEffect, useState } from 'react';
import LazyImage from './LazyImage';
import { fetchImages } from '../api/unsplash';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [imageLoadTimes, setImageLoadTimes] = useState({}); // Состояние для хранения времени загрузки каждого изображения
  
    useEffect(() => {
      fetchUnsplashImages();
    }, []);
  
    const fetchUnsplashImages = async () => {
      const data = await fetchImages(page);
      setImages([...images, ...data]);
      setPage(page + 1);
    };

    const measureImageLoadTime = (imageSrc) => {
      const image = new Image();
      const startTime = performance.now();
      image.src = imageSrc;
      image.onload = () => {
        const loadTime = performance.now() - startTime;
        setImageLoadTimes({ ...imageLoadTimes, [imageSrc]: loadTime });
      };
    };

    useEffect(() => {
      // Измеряем время загрузки каждого изображения при загрузке галереи
      images.forEach((image) => {
        measureImageLoadTime(image.urls.regular);
      });
    }, [images]);

    return (
      <InfiniteScroll
        dataLength={images.length}
        next={fetchUnsplashImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        className="gallery"
      >
        {images.map((image) => (
          <div key={image.id}>
            <LazyImage src={image.urls.regular} alt={image.alt_description} />
            {imageLoadTimes[image.urls.regular] && (
              <p>Время загрузки: {imageLoadTimes[image.urls.regular]} мс</p>
            )}
          </div>
        ))}
      </InfiniteScroll>
    );
};

export default Gallery;