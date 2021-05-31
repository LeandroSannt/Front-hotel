

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


    
    .animate{
        margin-top: 0px !important;
        }
    
`