type MapArgs = {
  value: number
  start: number
  end: number
  targetStart: number
  targetEnd: number
}

export default function map({ value, start, end, targetStart, targetEnd }: MapArgs) {
  const initialRange = start - end
  const finalRange = targetStart - targetEnd

  return ((value - start) / initialRange) * finalRange + targetStart
}
