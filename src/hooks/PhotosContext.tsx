import { createContext, ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface PhotosProps {
  albumId: 1
  id: string
  title: string
  url: string
  thumbnailUrl: string
}

interface PhotosProviderProps {
  children: ReactNode
}

export const PhotosContext = createContext<PhotosProps[]>([])

console.log(PhotosContext)

export function PhotosProvider({ children }: PhotosProviderProps) {
  const [photos, setPhotos] = useState<PhotosProps[]>([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json))
  }, [])

  return (
    <PhotosContext.Provider value={photos}>{children}</PhotosContext.Provider>
  )
}
