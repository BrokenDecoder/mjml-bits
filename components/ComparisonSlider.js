'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import './ComparisonSlider.css';

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Standard MJML',
  afterLabel = 'MJML Bits Pro',
  defaultPosition = 50,
  hoverMode = false,
  className = '',
}) {
  const [sliderPosition, setSliderPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging && !hoverMode) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, hoverMode, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (hoverMode || isDragging) {
      handleMove(e.clientX);
    }
  }, [hoverMode, isDragging, handleMove]);

  const handleMouseDown = () => {
    if (!hoverMode) setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`comparison-slider-container ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
    >
      {/* After / Top Layer (Right Side Visible initially) */}
      <div className="comparison-image-wrapper comparison-after">
        {typeof afterImage === 'string' ? (
          <img src={afterImage} alt={afterLabel} className="comparison-image" />
        ) : (
          afterImage
        )}
        <span className="comparison-label after-label">{afterLabel}</span>
      </div>

      {/* Before / Clipped Bottom Layer (Left Side) */}
      <div
        className="comparison-image-wrapper comparison-before"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {typeof beforeImage === 'string' ? (
          <img src={beforeImage} alt={beforeLabel} className="comparison-image" />
        ) : (
          beforeImage
        )}
        <span className="comparison-label before-label">{beforeLabel}</span>
      </div>

      {/* Handle Divider */}
      <div
        className="comparison-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="handle-line" />
        <div className="handle-button">
          <svg viewBox="0 0 24 24" className="handle-icon" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="8 4 4 12 8 20" />
            <polyline points="16 4 20 12 16 20" />
          </svg>
        </div>
        <div className="handle-line" />
      </div>
    </div>
  );
}
