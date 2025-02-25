import React, { useCallback, useEffect } from "react";
import Image from 'next/image';
import styles from '../styles/Home.module.css';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onNext, onPrev, onSelect }) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'Escape') onClose();
  }, [onNext, onPrev, onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} />
        <button className={styles.prevButton} onClick={onPrev}>&#10094;</button>
        <Image className={styles.mainImage} src={images[currentIndex]} alt="Full Screen" width={800} height={600} />
        <button className={styles.nextButton} onClick={onNext}>&#10095;</button>
        <div className={styles.thumbnailContainer}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={50}
              height={50}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ""}`}
              onClick={() => onSelect(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;