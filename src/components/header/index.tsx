import { Container } from "./styles";

import {Link} from 'react-router-dom'

import logo from '../../assets/logo.jpg'
export function Header(){
    return(
    <>
        <Container>
            <div className="header">
            <Link to ="/"><img src={logo} alt=""/></Link>
                <ul>
                    <li><Link to ="/">INICIO</Link></li>
                    <li><Link to ="/sobre">GALERIA</Link></li>
                </ul>
            </div>
        </Container>
    </>
        
    )
}