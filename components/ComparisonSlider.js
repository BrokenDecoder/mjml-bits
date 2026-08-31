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
  onSlideRightComplete,
  className = '',
}) {
  const [sliderPosition, setSliderPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [hasCompletedRight, setHasCompletedRight] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);

    if (percent >= 98 && !hasCompletedRight) {
      setHasCompletedRight(true);
      if (onSlideRightComplete) {
        onSlideRightComplete();
      }
    }
  }, [hasCompletedRight, onSlideRightComplete]);

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

  const handleMouseDown = (e) => {
    e.preventDefault();
    if (!hoverMode) {
      setIsDragging(true);
      handleMove(e.clientX);
    }
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

  // Reset completion state if position drops below 80%
  useEffect(() => {
    if (sliderPosition < 80 && hasCompletedRight) {
      setHasCompletedRight(false);
    }
  }, [sliderPosition, hasCompletedRight]);

  return (
    <div
      ref={containerRef}
      className={`comparison-slider-container ${isDragging ? 'is-dragging' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
    >
      {/* Background Layer: Standard MJML (Left Side - clipped to sliderPosition) */}
      <div
        className="comparison-image-wrapper comparison-before"
        style={{
          clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
        }}
      >
        <div className="comparison-inner-content">
          {typeof beforeImage === 'string' ? (
            <img src={beforeImage} alt={beforeLabel} className="comparison-image" />
          ) : (
            beforeImage
          )}
        </div>
        <span
          className="comparison-label before-label"
          style={{ opacity: sliderPosition < 12 ? 0 : 1 }}
        >
          {beforeLabel}
        </span>
      </div>

      {/* Foreground Layer: MJML Bits Design (Right Side - clipped to sliderPosition) */}
      <div
        className="comparison-image-wrapper comparison-after"
        style={{
          clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
        }}
      >
        <div className="comparison-inner-content">
          {typeof afterImage === 'string' ? (
            <img src={afterImage} alt={afterLabel} className="comparison-image" />
          ) : (
            afterImage
          )}
        </div>
        <span
          className="comparison-label after-label"
          style={{ opacity: sliderPosition > 88 ? 0 : 1 }}
        >
          {afterLabel}
        </span>
      </div>

      {/* Draggable Divider Handle */}
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
