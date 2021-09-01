import { Footer } from "../../components/footer";
import { Form } from "../../components/form";
import { Galery } from "../../components/galery";
import { Header } from "../../components/header";
import { GlobalStyle } from "../../styles/global";
import {PhotosProvider} from '../../hooks/PhotosContext'
import {useContext} from 'react'
import { PhotosContext } from '../../hooks/PhotosContext'



export function Sobre() {

  const news = useContext(PhotosContext)
  console.log(news)
  return (
    <PhotosProvider>
      <Header/>
      <Galery />
      <GlobalStyle/>
      <Form/>
      <Footer/>
    </PhotosProvider>
  );
}


