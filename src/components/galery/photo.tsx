
import {useContext} from 'react'
import { PhotosContext } from '../../hooks/PhotosContext'

export function Photo(){
    const news = useContext(PhotosContext)
    console.log(news)
    return(
       <>      
       </>
    )
}