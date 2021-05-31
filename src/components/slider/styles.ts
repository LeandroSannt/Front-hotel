import styled from 'styled-components'

import Slider1 from '../../assets/hotel11.jpg'
import Slider2 from '../../assets/hotel7.jpg'
import Slider3 from '../../assets/hotel8.jpg'

export const Content =styled.div `


.slick-next{
            display: none !important;
            }

        .slide{   
        .Image1{
            background-image: url(${Slider1});
            width: 100%;
            height: 100%;

            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;

            .content{
            height: 70vh;
            padding: 4rem 9rem;

            .hotel{
                margin-left: auto;
                max-width: 600px;
                display: flex;
                flex-direction: column;
                align-items:flex-end;
                
                    h1{
                        font-size: 3rem;
                        max-width: 600px;
                        color:white;
                        margin-bottom: 40px;
                        text-align: right;
                        span{
                            color: var(--color-lines);

                        }     
                }
            .button,
            button{
                width:50% ;
                font-size:1.3rem;
                font-weight: bold;
                color:#191970;
                background:var(--color-lines);
                border:0;
                padding: 0 2rem;
                border-radius: 0.25rem;
                height:3rem;

                transition:all 0.4s;

            &:hover{
                transform: translateY(-2px);
                filter:brightness(0.9);

                }
            }
       
        }

     }

}

        .Image2{
            background-image: url(${Slider2});
            width: 100%;        
            height: 100%;
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;

            .content{
            height: 70vh;
            padding: 4rem 9rem;

            .hotel{
                margin-right: auto;
                max-width: 600px;
                display: flex;
                flex-direction: column;
                align-items:flex-start;
                
                    h1{
                        font-size: 3rem;
                        max-width: 600px;
                        color:white;
                        margin-bottom: 40px;
                        ;
                        span{
                            color: var(--color-lines);

                        }     
                }
            .button,
            button{
                width:50% ;
                font-size:1.3rem;
                font-weight: bold;
                color:#191970;
                background:var(--color-lines);
                border:0;
                padding: 0 2rem;
                border-radius: 0.25rem;
                height:3rem;

                transition:all 0.4s;

            &:hover{
                transform: translateY(-2px);
                filter:brightness(0.9);

                    }
                }
     
            }

        }

    }

        .Image3{
            background-image: url(${Slider3});
            width: 100%;

            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;

            .content{
                height: 70vh;
                padding: 4rem 9rem;

            .hotel{
                margin-left: auto;
                max-width: 600px;
                display: flex;
                flex-direction: column;
                align-items:flex-end;
                
                    h1{
                        font-size: 3rem;
                        max-width: 600px;
                        color:white;
                        margin-bottom: 40px;
                        text-align: right;
                        span{
                            color: var(--color-lines);

                        }     
                }
            .button,
            button{
                width:50% ;
                font-size:1.3rem;
                font-weight: bold;
                color:#191970;
                background:var(--color-lines);
                border:0;
                padding: 0 2rem;
                border-radius: 0.25rem;
                height:3rem;

                transition:all 0.4s;

            &:hover{
                transform: translateY(-2px);
                filter:brightness(0.9);

                    }
                }
            }
        }
    }    

    @media(max-width:780px){
        .slide{
            .Image1{
                .content{
                    padding: 1rem 2rem ;
            }

            }
        }
            
            
    }
     
}

`



