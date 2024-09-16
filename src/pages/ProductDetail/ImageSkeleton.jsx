import React from 'react'

function ImageSkeleton({ width, height }) {
  return (
    <div className="skeleton-item" style={{ width, height }}>
      <div className="skeleton-image" style={{ width: '100%', height: '100%', }}></div>
    </div>
  )
}

export default ImageSkeleton