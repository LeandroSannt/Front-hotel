import { FormContainer } from './styles'

import { BsPersonFill, BsCalendar } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrContactInfo } from "react-icons/gr";

import ScrollAnimation from 'react-animate-on-scroll';



export function Form(){
    return(

        <FormContainer>
            <ScrollAnimation animateIn='fadeIn' animateOnce ={true}>
            <h2>FAÇA SUA RESERVA</h2>
            <div className="container">
                <div className="personInfo">
                    <label> <BsPersonFill />
                    <input type="text" name="name" placeholder="Digite seu nome" id="name" />
                    </label>
                
                    <label><FiPhoneCall/>
                    <input type="text" name="tel"  placeholder="Digite seu telefone" />
                    </label>
                </div>

                <div>
                    <label><HiOutlineMail/>
                    <input type="email" name="email"  placeholder="Digite seu email" />
                    </label>
                </div>

                <div className="date">

                    <label>
                        De:
                        <input type="date" name="reservationEnter"  placeholder="Diga a data da sua reserva" />
                    </label>

                    <label>
                        Ate:
                        <input type="date" name="reservationClose"  placeholder="Diga a data da sua reserva" />
                    </label>
                </div>

                <div className="description">
                    <label><GrContactInfo/>
                    <input type="textarea" name="description"  placeholder="Algo a mais ?" />
                    </label>
                </div>

            </div>

                <button type="submit">ENVIAR</button>
                </ScrollAnimation>
        </FormContainer>
    )
}