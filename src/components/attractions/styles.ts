import styled from 'styled-components'
import piscina1 from '../../assets/hotel12.jpg'


export const Container = styled.div `
       
        margin: 50px auto 0 auto;
        max-width: 1224px;
        padding: 2rem 1rem ;
        color: #191970;


        h1{
            margin-bottom: 50px;
            text-align: center;
        }

        
        .containerCards{
            display: grid;
            grid-template-columns: repeat(4,1fr);

            .cards{
                width: 70%;
                height: 50%;

                .card{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    cursor: pointer;


                    img{
                        border-radius: 4px;
                        width: 100%;
                        height: 100%;
                        max-width: 100%;
                        -moz-transition: all 0.3s;
                        -webkit-transition: all 0.3s;
                        transition: all 0.3
                    }

                    

                    img:hover {
                        -moz-transform: scale(1.1);
                        -webkit-transform: scale(1.1);
                        transform: scale(1.1);
                    }
                }
                p{  
                        width: 100%;
                        font-size: 1.2rem;
                        margin-top: 1.2rem;
                        color: gray;
                    }
                }
            }

            @media(max-width:1130px){
            .containerCards{
                grid-template-columns:1fr 1fr;
                gap:50px;
                position:initial;
                place-items: center;
            }
        }

`

export const ContainerImg = styled.div `
        color: white;
        background-color: white;
        padding:0 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 0px;
        background-image: url(${piscina1});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: 270px;

        span{
            color: var(--color-lines);

        }

`

export const ContainerHotel = styled.div `

        margin: 50px auto -80px auto;
        max-width: 1224px;
        padding: 2rem 1rem ;

       
        p{  
            font-size: 1.3rem;
            line-height: 25px;
            margin-bottom: 20px;

        }

        span{
            line-height: 50px;

            font-weight: bold;
        }

        div{

            margin-top: 100px;

            img{

                margin: 0;
                padding: 0;
                width: 100%;
                max-height:500px ;
            }

            button{

                bottom: 0;
                padding: 0;
                margin: 0;
                width: 100%;
                height: 80px;
            }
        }

`
export const ContainerHotelSobrepor = styled.div `
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem ;
    align-items: center;
    width: 100%;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    min-height: 100vh;

    div{
        margin: 0 auto;
        width: 60%;
        height: 600px;
        margin-top: 80px;


        img{
            border-radius: 10px;
            width: 100%;
            height: 100%;
        }

    }

    p{  
        margin-top: 20px;
        color: white;
        font-size: 1.3rem;
        font-weight: bold;
    }


`


