
import Slider1 from '../assets/hotel11.jpg'
import Slider2 from '../assets/hotel7.jpg'
import Slider3 from '../assets/hotel8.jpg'



import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle `
    :root {
        --color-primary:#3090F0;
        --color-text:#2135D9;
        --color-lines:#39FFC3;
        --shape:#ffffff;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    
    html{
        @media(max-width:1080px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }
    body{
        background: var(--shape);
        -webkit-font-smoothing:antialiased;
    }
    
    body,input,textarea,button{
        font-family:'Poppins',sans-serif;
        font-weight:400;
    }
    h1 , h2, h3, h4,h5,h6{
        font-weight:600;
    }
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
                cursor:pointer;


            transition:all 0.4s;

        &:hover{
            transform: translateY(-2px);
            filter:brightness(0.9);
            }
        }

    
    [disabled]{
        opacity:0.6;
        cursor:not-allowed
    }

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
    
    .animate{
        margin-top: 0px !important;
        }
    
`