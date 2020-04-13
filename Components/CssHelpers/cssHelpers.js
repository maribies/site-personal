import styled from 'styled-components'

const colors = {
  purple: { hex: '#5F4B8B', rgb: { r: 95, g: 75, b: 139 } },
  blue: { hex: '#0078A7', rgb: { r: 0, g: 120, b: 167 } },
  yellow: { hex: '#F9AC2F', rgb: { r: 249, g: 172, b: 47 } },
  pink: { hex: '#D32E5E', rgb: { r: 211, g: 46, b: 94 } },
  orange: { hex: '#FF7913', rbg: { r: 255, g: 121, b: 19 } },
  rose: { hex: '#B76BA3', rgb: { r: 183, g: 107, b: 163 } },
  mustard: { hex: '#D2B04C', rgb: { r: 210, g: 176, b: 76 } },
  tan: { hex: '#C68F65', rgb: { r: 198, g: 143, b: 101 } },
  grey: { hex: '#2E3138', rgb: { r: 46, g: 49, b: 56 } },
  black: { hex: '#020300', rgb: { r: 2, g: 3, b: 0 } },
  white: { hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 } }
}

export const getColorValue = (color, opacity = 1, isHex) => {
  if (Object.keys(colors).forEach(key => { if (key != color) { return true } })) {
    return colors.grey.hex
  }

  if (isHex) {
    return colors[color].hex
  }

  return `rgba(${colors[color].rgb.r}, ${colors[color].rgb.g}, ${colors[color].rgb.b}, ${opacity})`
}

export const dropShadowWrapper = styled.div`
  filter: drop-shadow(0 0 12px ${getColorValue('grey')});
`
