import { Attractions } from "./components/attractions";
import { Footer } from "./components/footer";
import { Form } from "./components/form";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";



export function App() {
  return (
    <>

      <Header />
      <GlobalStyle/>
      <Attractions/>
      <Form/>
      <Footer/>
    </>
  );
}

