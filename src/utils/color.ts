export const darkenLighten = (color: string, amt: number) => {
  const hasHash = color[0] === '#'
  const usePound = hasHash
  const normalizedColor = hasHash ? color.slice(1) : color

  const num = parseInt(normalizedColor, 16)

  let r = (num >> 16) + amt
  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }

  let b = ((num >> 8) & 0x00ff) + amt
  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }

  let g = (num & 0x0000ff) + amt
  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export const hexToRgb = (
  inputHex: string,
  opacity: number,
  lightenDarken: { r?: number; g?: number; b?: number } = {}
) => {
  const hexToNormalize = inputHex.trim()
  const hex =
    hexToNormalize[0] === '#' ? hexToNormalize.substr(1) : hexToNormalize
  const bigint = parseInt(hex, 16)
  const h = []

  if (hex.length === 3) {
    h.push((bigint >> 4) & 255)
    h.push((bigint >> 2) & 255)
  } else {
    h.push((bigint >> 16) & 255)
    h.push((bigint >> 8) & 255)
  }
  h.push(bigint & 255)

  h[0] += lightenDarken.r || 0
  h[1] += lightenDarken.g || 0
  h[2] += lightenDarken.b || 0

  if (opacity) {
    h.push(opacity)
    return `rgba(${h.join()})`
  }

  return `rgb(${h.join()})`
}
