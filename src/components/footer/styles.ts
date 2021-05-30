import styled from 'styled-components'

export const Container = styled.footer`

    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 35vh;
    width: 100%;
    background-color: var(--color-primary);
    margin: 0 auto;
    padding: 2rem 1rem ;
    color: white;

    ul{
        li{
            color: white;
            list-style: none;
            margin-bottom: 10px;
            transition: all 400ms;
            cursor: pointer;

            &:hover{
                color: white;
                
            }
        }
    }

    .form{


        display: flex;
        flex-direction: column;

        input{
            font-size: 1.5rem;
                        border: solid gray 1px;
                        color: gray;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        padding: .4rem 2rem;
                        border-radius: 4px;
                        outline: none;
        }

        button{
            margin-top: 5px;
            width: 100%;
        }

    }
`