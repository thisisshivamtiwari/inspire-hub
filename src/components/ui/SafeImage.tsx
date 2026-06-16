import { useEffect, useState, type ImgHTMLAttributes } from 'react'
import { IMAGE_PLACEHOLDER } from '../../lib/site'

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement>

export const SafeImage = ({ src, onError, alt = '', ...props }: SafeImageProps) => {
  const [currentSrc, setCurrentSrc] = useState(src || IMAGE_PLACEHOLDER)

  useEffect(() => {
    setCurrentSrc(src || IMAGE_PLACEHOLDER)
  }, [src])

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      onError={(event) => {
        if (currentSrc !== IMAGE_PLACEHOLDER) {
          setCurrentSrc(IMAGE_PLACEHOLDER)
        }
        onError?.(event)
      }}
    />
  )
}
