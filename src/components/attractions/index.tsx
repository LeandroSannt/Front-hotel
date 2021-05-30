import {Container, ContainerHotel, ContainerHotelSobrepor, ContainerImg} from './styles'
import ScrollAnimation from 'react-animate-on-scroll';


import piscina1 from '../../assets/hotel1.jpg'
import piscina2 from '../../assets/hotel2.jpg'
import piscina3 from '../../assets/hotel3.jpg'
import piscina4 from '../../assets/ceu.jpg'

export function Attractions(){
    return(
        <>
        
        <Container>
        <ScrollAnimation animateIn='bounce'
                        initiallyVisible={true}
                        animateOnce ={true}
                        >

            <h1>Nossas Áreas / Piscinas</h1>

            <div className="containerCards">
                <div className="cards">
                    <div className="card">
                        <img src={piscina1} alt =""/>
                    </div>
                        <p>Acesso facil para nosso hotel com uma vista panoramica de todo o ambiente</p>
                </div>

                <div className="cards">
                    <div className="card">
                    <img src={piscina2} alt =""/>
                    </div>
                        <p>Area para crianças todos os tamanhos </p>
                </div>

                <div className="cards">
                    <div className="card">
                    <img src={piscina3} alt =""/>
                    </div>
                        <p>Iluminação noturna para eventos a qualquer hora do dia</p>
                </div>

                <div className="cards">
                    <div className="card">
                    <img src={piscina4} alt =""/>
                    </div>
                        <p>Junto de um espaço verde para atividades</p>
                </div>
            </div>
            </ScrollAnimation>
        </Container>

        <ContainerImg>
            <h1> <span>NOSSO HOTEL OFERECE OS MELHORES SERVIÇOS</span> PARA VOCÊ DESFRUTAR DE UMA ESTADIA TRANQUILA</h1>
        </ContainerImg>

        <ContainerHotel>
            <ScrollAnimation animateIn='bounceInRight' className="animate"  animateOnce ={true}>
                
               <p> <span>consectetur adipisicing elit. Sapiente, expedita totam doloribus hic molestias
                 vero quas excepturi perspiciatis veniam earum natus nisi laborum est autem, 
                blanditiis dolores dolorem magni voluptate.
                </span></p>
            
                <p>Lorem ipsum dolor sit amet, 
                <span>consectetur adipisicing elit. Sapiente, expedita totam doloribus hic molestias</span>
                 vero quas excepturi perspiciatis veniam earum natus nisi laborum est autem, 
                blanditiis dolores dolorem magni voluptate.</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce ={true}>
            <div>
                <img src={piscina3} alt =""/>
                <button>FAÇA SUA RESERVA</button>
            </div>
            </ScrollAnimation>
  
        </ContainerHotel>

        <ContainerHotelSobrepor>
            
                <div>
                    <img src={piscina1} alt =""/>
                </div>
                <p>ASSISTA AO NOSSO VIDEO E SINTA O QUE A AMAZÔNIA PROPORCIONA</p>
            
        </ContainerHotelSobrepor>

</>
    )

}