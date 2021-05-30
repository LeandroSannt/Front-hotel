import { Container } from "./styles";

export function Footer(){
    return(
        <Container>
            <div><h1>LOGO</h1></div>
            <div><ul>
                    <li>QUEM SOMOS</li>
                    <li>FOTOS</li>
                    <li>EQUIPAMENTOS</li>
                    <li>CONTATO</li>
                </ul>
            </div>
            <div className="form">
                <input type="text" placeholder="Agende seu horario" />
                <button>AGENDAR</button>
            </div>
        </Container>
    )
}