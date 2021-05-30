import React, { Component } from "react";
import Slider from "react-slick";
import { Content } from "./styles";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (

      <Content>
        <Slider className="slide" {...settings}>
            <div className="Image1">
                    <div className="content">
                        <div className="hotel">
                            <h1>O MELHOR HOTEL VOCÊ <span>ENCONTRA AQUI!</span></h1>
                            <button>FAZER RESERVA</button>
                        </div>
                    </div>
            </div>

            <div  className="Image2">
                    <div className="content">
                        <div className="hotel">
                            <h1>AMBIENTE AGRADAVEL COM UMA GRANDE <span>ÁREA VERDE</span></h1>
                            <button>FAZER RESERVA</button>
                        </div>
                    </div>
            </div>

            <div  className="Image3">
                    <div className="content">
                        <div className="hotel">
                            <h1>VISTA PANORAMICA PARA <span>PARA TODO O MAR</span></h1>
                            <button>FAZER RESERVA</button>
                        </div>
                    </div>
            </div>


          
        </Slider>
      </Content>
    );
  }
}