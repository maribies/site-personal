import React from 'react'

export const Svg = ({ width, height, viewbox, fill = "none", children }) => {
  return (
    <svg width={width} height={height} viewBox={viewbox} fill={fill} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      {children}
    </svg>
  )
}
