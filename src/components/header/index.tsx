import { Container } from "./styles";
import  Slider  from "./slider/index";
import logo from '../../assets/logo.jpg'
export function Header(){
    return(
    <>
        <Container>
            <div className="header">
                <img src={logo} alt=""/>
                <ul>
                    <li>QUEM SOMOS</li>
                    <li>FOTOS</li>
                    <li>PACOTES</li>
                </ul>
            </div>
        </Container>

        <Slider/>

    </>
        
    )
}