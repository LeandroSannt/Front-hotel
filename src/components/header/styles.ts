import styled from 'styled-components'

export const Container = styled.header `
    border-bottom:solid 3px var(--color-lines);
    width: 100%;
    padding: 0 2rem;

    .header{
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1224px;
        padding: 1.2rem 1rem ;

        img{
            width: 80px;
            height: 50px;
        }

        ul{
            display: flex;
            list-style: none;

            li{
                display:flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px ;

                &:last-child{
                margin-right: 0;
                }

                
            }

        }

    }

`