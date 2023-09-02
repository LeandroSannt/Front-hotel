import { Footer } from '../../components/footer'
import { Form } from '../../components/form'
import { Header } from '../../components/header'
import { GlobalStyle } from '../../styles/global'
import { PhotosProvider } from '../../hooks/PhotosContext'

export function Sobre() {
  return (
    <PhotosProvider>
      <Header />
      <GlobalStyle />
      <Form />
      <Footer />
    </PhotosProvider>
  )
}
